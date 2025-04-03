import express from "express";
import Item from "backend/models/item.js";

const router = express.Router();

// Get all items
router.get("/", async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

export default router;