import { Users } from "../../model/user.model";
import jwt from "jsonwebtoken";
import { accessTokenKey, refreshTokenKey } from "../lib/token";
import prisma from "../lib/prisma";

export function generateAccessToken(user: Users) {
    const expiresIn = "1m";
    return jwt.sign(user, accessTokenKey, { expiresIn });
}

export function generateRefreshToken(user: Users) {
    return jwt.sign(user, refreshTokenKey);
}

export async function saveRefreshToken(
    userId: number,
    token: string,
    expired: any
) {
    await prisma.refreshToken.create({
        data: {
            token: token,
            userId: userId,
            expiry: expired,
        },
    });
}

export async function getRefreshToken(userId: number) {
    const refreshToken = await prisma.refreshToken.findFirst({
        where: {
            userId: userId,
        },
    });

    if (refreshToken) {
        return refreshToken.token;
    }
}
