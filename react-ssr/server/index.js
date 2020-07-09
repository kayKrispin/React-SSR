import express from "express";
import path from "path";
import React from "react";
import renderer from "./middleware/renderer";

const app = express();
const router = express.Router();

const PORT = "8080";

app.use("/", (req, res, err) => {
  res.send({hello:"hello there"})
});

app.listen(PORT, () => console.log(`Running on port, ${PORT}`));


