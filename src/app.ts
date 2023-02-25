import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import { set } from "mongoose";
import cookieParser from 'cookie-parser'

import { connectToDatabase } from "./connections/db.connection";
import { PORT } from "./utils/config.util";
import indexRoute from "./routes/index.route";

// configuring moongoose
set("strictQuery", true);

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser())
app.use("/api/v3", indexRoute);

app.listen(PORT, function () {
  connectToDatabase();
  console.log("Server started on http://localhost:" + PORT);
});
