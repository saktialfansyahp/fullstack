import { Request, Response } from "express";
import prisma from "../../common/lib/prisma";
import ResponseAPI from "../../common/helpers/response.helpers";

export const getUser = async (req: Request, res: Response) => {
    const id = req.params.id;

    let user;

    if (id) {
        user = await prisma.user.findFirst({
            where: {
                id: parseInt(id),
            },
            select: {
                password: false,
            },
        });
    } else {
        user = await prisma.user.findMany({
            select: {
                name: true,
                email: true,
            },
        });
    }

    if (!user) {
        return ResponseAPI(res, { msg: "Data Kosong" }, 400);
    }

    return ResponseAPI(res, user, 200);
};
