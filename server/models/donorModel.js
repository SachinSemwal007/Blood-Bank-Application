import mongoose from "mongoose";

const donorSchema = new mongoose.Schema({
  name: String,
  bloodGroup: String,
  rhFactor: String,
  sex: String,
  hiv: String,
  weight: String,
  height: String,
  bloodPressure: String,
  donatedEarlier: String,
  previousDonationDate: String,
  diseases: String,
  spouseName: String,
  address: String,
  city: String,
  pinCode: String,
  phoneNumber: String,
  mobileNumber: String,
  email: String,
  pdfFile: String, // to store uploaded PDF filename or URL
}, { timestamps: true });

const Donor = mongoose.model("Donor", donorSchema);

export default Donor;
