import express from "express";
import { addDonor, getAllDonors } from "../controllers/donorController.js";

const router = express.Router();

// Add a donor
router.post("/add", addDonor);

// Get all donors
router.get("/all", getAllDonors);

export default router;
