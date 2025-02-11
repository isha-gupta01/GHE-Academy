import { NextResponse } from "next/server";
import connectDB from "/Backend/config/db";
import FeesModel from "/Backend/models/Fees";

connectDB(); // Connect to MongoDB

// Get all fee structures (GET request)
export async function GET() {
  try {
    const fees = await FeesModel.find({}); // Fetch all fee entries from MongoDB
    return NextResponse.json(fees, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch fees" }, { status: 500 });
  }
}
export async function POST(request) {
  try {
    const body = await request.json(); // Correct way to parse request body in Next.js
    const { Grade, RegFees, AdmissionFees, TuitionFees } = body;

    const newFee = new FeesModel({ Grade, RegFees, AdmissionFees, TuitionFees });
    await newFee.save();

    return NextResponse.json(newFee, { status: 201 }); // Return newly created entry
  } catch (error) {
    return NextResponse.json({ error: "Failed to add fees", details: error.message }, { status: 500 });
  }
}
export async function PUT(request) {
  try {
    const body = await request.json();
    const { _id, Grade, RegFees, AdmissionFees, TuitionFees } = body;

    const updatedFee = await FeesModel.findByIdAndUpdate(
      _id,
      { Grade, RegFees, AdmissionFees, TuitionFees },
      { new: true, runValidators: true }
    );

    if (!updatedFee) {
      return NextResponse.json({ error: "Fee entry not found" }, { status: 404 });
    }

    return NextResponse.json(updatedFee, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to update fee entry", details: error.message }, { status: 500 });
  }
}

// Delete a fee entry (DELETE request)
export async function DELETE(request) {
  try {
    const body = await request.json();
    const { _id } = body;

    const deletedFee = await FeesModel.findByIdAndDelete(_id);

    if (!deletedFee) {
      return NextResponse.json({ error: "Fee entry not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Fee entry deleted successfully" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete fee entry", details: error.message }, { status: 500 });
  }
}