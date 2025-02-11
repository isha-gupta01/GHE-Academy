import { NextResponse } from "next/server";
import connectDB from "./backend/config/db";
import Fees from "./backend/models/Fees";

connectDB(); // Connect to MongoDB

// Get all fee structures (GET request)
export async function GET() {
  try {
    const fees = await Fees.find({}); // Fetch all fee entries from MongoDB
    return NextResponse.json(fees, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch fees" }, { status: 500 });
  }
}
