import Donor from "../models/donorModel.js";

// Add donor
export const addDonor = async (req, res) => {
  try {
    const donor = new Donor(req.body);
    await donor.save();
    res.status(201).json({ message: "Donor added successfully", donor });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error adding donor" });
  }
};

// Get all donors
export const getAllDonors = async (req, res) => {
  try {
    const donors = await Donor.find();
    res.status(200).json(donors);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching donors" });
  }
};
