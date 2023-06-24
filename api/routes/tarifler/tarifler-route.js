const express = require("express");
const router = express.Router();
const { getAll } = require("./tarifler-model.js");
const { getRecipewithId } = require("./tarifler-middleware.js");

router.get("/", async (req, res, next) => {
  try {
    let query = await getAll();
    res.status(200).json(query);
  } catch (e) {
    next(e);
  }
});

router.get("/:id", getRecipewithId, async (req, res, next) => {
  try {
    res.status(200).json(req.data);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
