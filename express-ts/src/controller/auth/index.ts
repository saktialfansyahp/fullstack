// export { register } from "./register.controller";

import { Request, Response } from "express";
import { ReqLogin, ReqUser } from "../../model/user.model";
import ResponseAPI from "../../common/helpers/response.helpers";
import validator from "validator";
import prisma from "../../common/lib/prisma";
import bcrypt from "bcrypt";
import { sign, verify } from "jsonwebtoken";
import {
    generateAccessToken,
    generateRefreshToken,
    getRefreshToken,
    saveRefreshToken,
} from "../../common/helpers/token.helpers";
import { accessTokenKey } from "../../common/lib/token";

export const register = async (req: Request, res: Response) => {
    const { name, email, password, confirm_password }: ReqUser = req.body;

    const errors: { [key: string]: string } = {};

    if (!name) {
        errors.name = "Name is Required";
    }
    if (!email) {
        errors.email = "Email is Required";
    }
    if (!password) {
        errors.password = "Password is Required";
    }
    if (email && !validator.isEmail(email)) {
        errors.email = "Email format not valid";
    }
    if (password && password.length < 8) {
        errors.password = "Password must be at least 8 characters";
    }
    if (password && password !== confirm_password && password.length > 8) {
        errors.password = "Password doesnt match";
    }
    if (Object.keys(errors).length > 0) {
        return ResponseAPI(res, errors, 400);
    }

    const existUser = await prisma.user.findFirst({
        where: {
            email: email,
        },
    });
    if (existUser) {
        errors.email = "Email is Already Exist";
        return ResponseAPI(res, errors, 400);
    }

    try {
        const hashPassword = await bcrypt.hash(password, 10);
        const user = await prisma.user.create({
            data: {
                name: name,
                email: email,
                password: hashPassword,
            },
        });

        return ResponseAPI(res, user, 201);
    } catch (error) {
        return ResponseAPI(res, errors, 400);
    }

    // return ResponseAPI(res, existUser, 200);
};

export const login = async (req: Request, res: Response) => {
    const { email, password }: ReqLogin = req.body;

    const errors: { [key: string]: string } = {};

    if (!email) {
        errors.email = "Email is Required";
    }
    if (email && !validator.isEmail(email)) {
        errors.email = "Email format not valid";
    }
    if (password && password.length < 8) {
        errors.password = "Password must be at least 8 characters";
    }
    if (Object.keys(errors).length > 0) {
        return ResponseAPI(res, errors, 400);
    }

    const user = await prisma.user.findUnique({
        where: {
            email: email,
        },
    });

    if (!user) {
        errors.email = "User not found";
        return ResponseAPI(res, errors, 400);
    }

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
        errors.password = "Wrong Password";
        return ResponseAPI(res, errors, 400);
    }

    let refreshToken = await getRefreshToken(user.id);
    if (!refreshToken) {
        refreshToken = generateRefreshToken(user);
        await saveRefreshToken(
            user.id,
            refreshToken,
            new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
        );
    }

    const accessToken = generateAccessToken(user);

    res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        secure: true,
        sameSite: "strict",
        maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    const data = {
        data: user,
        token: accessToken,
    };

    return ResponseAPI(res, data, 200);
};

export const changePassword = async (req: Request, res: Response) => {
    const { email, password }: ReqLogin = req.body;

    const updateUser = await prisma.user.update({
        where: {
            email: email,
        },
        data: {
            password: password,
        },
    });

    return ResponseAPI(res, updateUser, 200);
};

export const verif = async (req: Request, res: Response) => {
    const token = req.headers["authorization"];
    if (!token) {
        return ResponseAPI(res, { msg: "Unauthorized" }, 401);
    }
    try {
        var decoded = verify(token, accessTokenKey);
        res.status(200).send(decoded);
    } catch (err) {
        res.status(401).send(err);
    }
};
