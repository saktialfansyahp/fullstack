import { Response } from "express";

export default function ResponseAPI(res: Response, data: any, code: number) {
    if (Array.isArray(data)) {
        res.status(code).send({ data });
    } else {
        res.status(code).send(data);
    }
}
