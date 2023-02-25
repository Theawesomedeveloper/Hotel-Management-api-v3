import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import { set } from "mongoose";
import cookieParser from 'cookie-parser'
import cors from 'cors';

import { connectToDatabase } from "./connections/db.connection";
import { PORT } from "./utils/config.util";
import indexRoute from "./routes/index.route";

// configuring moongoose
set("strictQuery", true);

const app = express();

app.use(cors())

// app.use(cors({
//   origin: ['http:localhost:5000', 'http://localhost:3000']
// }));

// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   next();
// });

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser())
app.use("/api/v3", indexRoute);

app.listen(PORT, function () {
  connectToDatabase();
  console.log("Server started on http://localhost:" + PORT);
});
