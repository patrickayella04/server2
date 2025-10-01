import express from "express";
import {
  shortenUrl,
  redirectShortUrl,
} from "../controllers/shorten.controller.js";
const urlRouter = express.Router();

urlRouter.post("/shorten", shortenUrl);
urlRouter.get("/:hash", redirectShortUrl);

export default urlRouter;
