import mongoose from "mongoose";

const FeesSchema = new mongoose.Schema({
  grade: { type: String, required: true },
  regFees: { type: Number, required: true },
  admissionFees: { type: Number, required: true },
  tuitionFees: { type: Number, required: true },
});

// Ensure model is not redefined on hot reloads
const FeesModel = mongoose.models.Fees || mongoose.model("Fees", FeesSchema, "feescollection");

export default FeesModel;
