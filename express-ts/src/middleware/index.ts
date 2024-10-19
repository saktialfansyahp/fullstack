import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { accessTokenKey } from "../common/lib/token";
import ResponseAPI from "../common/helpers/response.helpers";

export const verifToken = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers["authorization"];

    if (!token) {
        return ResponseAPI(res, { msg: "Unauthorized" }, 401);
    }
    try {
        verify(token, accessTokenKey);
        next();
    } catch (error) {
        console.log(req.cookies);

        return ResponseAPI(res, error, 401);
    }
};
