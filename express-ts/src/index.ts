import express, { Express } from "express";
// import { auth } from "./route";
import dotenv from "dotenv";
import crypto from "crypto";
import cookieParser from "cookie-parser";
import expressListRoutes from "express-list-routes";
import router from "./route";
import { setupSwagger } from "./common/swagger/swagger";
import bodyParser from "body-parser";
import cors from "cors";

dotenv.config();

// const secretKey = crypto.randomBytes(64).toString("hex");
// console.log(secretKey);

console.log(new Date(Date.now()));

const secretKey = process.env.SECRET_KEY;

const app: Express = express();
const port = process.env.PORT || 3000;

const allowedOrigins = [
    "http://localhost:3001",
    "http://localhost:3002",
    "http://192.168.7.107:3001",
];

const options: cors.CorsOptions = {
    origin: allowedOrigins,
};

app.use(cors(options));
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(router);
console.log(expressListRoutes(router));

// app.get("/", (req, res) => {
//     res.send("App router main");
// });

// app.use("/api", auth);

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
    setupSwagger(app);
});
