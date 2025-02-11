import mongoose from "mongoose"

const FeesSchema = new mongoose.Schema({
  Class: { type: Number, required: true },
  RegFees: { type: Number, required: true },
  AdmissionFees: { type: Number, required: true },
  TuitionFees: { type: Number, required: true }
});

export default FeesModel= mongoose.model("FeesModel", FeesSchema, "Fees");
