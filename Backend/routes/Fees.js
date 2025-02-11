import connectDB from "./config/db";
import FeesModel from "./models/Fees";

export default async function handler(req, res) {
  await connectDB();

  switch (req.method) {
    case "GET":
      try {
        const fees = await FeesModel.find({});
        res.status(200).json(fees);
      } catch (error) {
        res.status(500).json({ error: "Failed to fetch fee structure" });
      }
      break;

    case "POST":
      try {
        const { grade, amount, description } = req.body;
        const newFee = new FeesModel({ grade, amount, description });
        await newFee.save();
        res.status(201).json(newFee);
      } catch (error) {
        res.status(500).json({ error: "Failed to add fee structure" });
      }
      break;

    case "PUT":
      try {
        const { id, grade, amount, description } = req.body;
        const updatedFee = await FeesModel.findByIdAndUpdate(
          id,
          { grade, amount, description },
          { new: true }
        );
        res.status(200).json(updatedFee);
      } catch (error) {
        res.status(500).json({ error: "Failed to update fee structure" });
      }
      break;

    case "DELETE":
      try {
        const { id } = req.body;
        await FeesModel.findByIdAndDelete(id);
        res.status(200).json({ message: "Fee entry deleted successfully" });
      } catch (error) {
        res.status(500).json({ error: "Failed to delete fee entry" });
      }
      break;

    default:
      res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
