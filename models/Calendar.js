import mongoose from "mongoose";

const CalendarSchema = new mongoose.Schema({
  month: { type: String, required: true },
  date: { type: String, required: true },
  event: { type: String, required: true },
});

// Ensure model is not redefined on hot reloads
const CalendarModel = mongoose.models.Calendar || mongoose.model("Calendar", CalendarSchema, "calendarcollection");

export default CalendarModel;
