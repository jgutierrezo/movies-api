/****************************************************************************** ***
 * ITE5315 – Project
 * I declare that this assignment is my own work in accordance with Humber Academic Policy.
 * No part of this assignment has been copied manually or electronically from any other source
 * (including web sites) or distributed to other students. *
 * Group member Name: Juan Gutierrez Student IDs: N01469217 Date: 29-Nov-2022
 ****************************************************************************** ***/

import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import movieRoutes from "./routes/movieRoutes.js";
import connectDb from "./database/MongoDbConfig.js";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

//To load env variables into the process global object
dotenv.config();

//Create server
const app = express();

const PORT = process.env.PORT_AUTH || 5002;
//To connect to the Db
connectDb()
  .then(app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });

//Configure server
app.use(cors({ origin: "*" }));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

let refreshTokens = [];

app.post("/refreshToken", (req, res) => {
  const { refreshToken } = req.body;
  if (refreshToken == null) return res.sendStatus(401);
  if (!refreshTokens.includes(refreshToken)) return res.sendStatus(403);
  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    res.json({ accessToken: generateAccessToken({ email: user.email }) });
  });
});

app.post("/login", (req, res) => {
  //Authenticate user

  const user = { email: req.body.email };
  const accessToken = generateAccessToken(user);
  const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET);
  refreshTokens.push(refreshToken);
  res.json({ accessToken, refreshToken });
});

app.delete("/logout", (req, res) => {
  //Delete refresh token

  refreshTokens.filter((t) => t !== req.body.refreshToken);
  res.sendStatus(204);
});

function generateAccessToken(user) {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "7d" });
}
