import mongoose from "mongoose";

const FeesSchema = new mongoose.Schema({
  Grade: { type: String, required: true },
  RegFees: { type: Number, required: true },
  AdmissionFees: { type: Number, required: true },
  TuitionFees: { type: Number, required: true },
});

// Correct way to export the model
const FeesModel = mongoose.model("FeesModel", FeesSchema, "Fees");

export default FeesModel;
