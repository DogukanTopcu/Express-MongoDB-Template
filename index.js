import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";

import ConnectDB from "./config/db.js";
import { config } from "./config/cors.js";


import _routeRoutes from "./routes/_route.js";


dotenv.config();
ConnectDB();
const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors(config));
app.use(express.json());

app.get("/", (req, res) => {
    res.send("API is running successfuly");
});

app.use("/_route", _routeRoutes);

const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server started on PORT ${PORT}`.yellow.bold));

export default app;