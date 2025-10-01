import type { Controller } from "../types/controller.js";
import {
  parseUrl,
  saveUrl,
  lookupUrl,
} from "../services/shortenUrl/helpers/urlHelpers.js";

const BASE_URL = process.env.BASE_URL ?? "http://localhost:3000/url";

export const shortenUrl: Controller = async (req, res) => {
  try {
    const { originalUrl } = req.body;
    // Validate the URL
    const parsedUrl = parseUrl(originalUrl);
    if (!parsedUrl) return res.status(400).json({ error: "Invalid Url" });
    // Store the URL and its hash
    const hash = saveUrl(originalUrl);
    const shortUrl = `${BASE_URL}/${hash}`;

    return res.status(201).json({
      message: "URL shortened successfully",
      shortUrl,
      hash,
    });
  } catch (error) {
    return res.status(500).json({ error: (error as Error).message });
  }
};

export const redirectShortUrl: Controller = async (req, res) => {
  try {
    const { hash } = req.params;
    const originalUrl = lookupUrl(hash);
    if (!originalUrl) {
      return res.status(404).json({ error: "URL not found" });
    }
    return res.redirect(originalUrl);
  } catch (error) {
    return res.status(500).json({ error: (error as Error).message });
  }
};
