import express, { Router } from "express";
import { changePassword, login, register, verif } from "../controller/auth";
import { getUser } from "../controller/user";
import { verifToken } from "../middleware";

const router = Router();
const authRouter = Router();
// authRouter.post("/register", register);
/**
 * @openapi
 * /register:
 *   get:
 *     summary: Retrieve a list of users
 *     responses:
 *       200:
 *         description: A list of users
 */
authRouter.post("/register", register);
authRouter.post("/login", login);

// need middleware
authRouter.get("/verif", verif);
authRouter.post("/updatePassword", changePassword);
authRouter.get("/", (req, res) => {
    res.send("Ini / pada prefix auth router");
});

const userRouter = Router();
userRouter.post("/register", (req, res) => {
    res.send("Ini register pada prefix user router");
});
userRouter.get("/:id?", getUser);

router.get("/", (req, res) => {
    res.send("Ini alamat / pada file auth route ts");
});
router.use("/auth", authRouter);
router.use("/users", verifToken, userRouter);

export default router;
