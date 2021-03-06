const express = require("express");
const router = express.Router();
const isBase64 = require("is-Base64");
const base64img = require("base64-img");

router.post("/", (req, res) => {
  const image = req.body.image;

  if (!isBase64(image, { mimeRequired: true })) {
    return res.status(400).json({ status: "error", message: "invalid base64 " });
  }
});

module.exports = router;
