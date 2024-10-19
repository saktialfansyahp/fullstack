import auth from "./auth.route";

import express from "express";

const router = express.Router();

router.use("/api", auth);
export default router;
