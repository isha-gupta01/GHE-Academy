import { connectDB } from "@/lib/db";
import FeesModel from "@/models/Fees";
import { NextResponse } from "next/server";

// ✅ GET all fees data
export async function GET() {
  try {
    await connectDB();

    // Fetch fees data
    const feesData = await FeesModel.find({}).sort({Grade:1}).lean();

    // Sorting function with error handling
    

    return NextResponse.json(feesData);
  } catch (error) {
    console.error("Error fetching fees data:", error);
    return NextResponse.json({ error: "Error fetching fees data" }, { status: 500 });
  }
}



// ✅ POST - Add a new fees entry
export async function POST(req) {
  try {
    await connectDB();
    const { grade, regFees, admissionFees, tuitionFees } = await req.json();

    if (!grade || regFees == null || admissionFees == null || tuitionFees == null) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    const newFee = await FeesModel.create({ grade, regFees, admissionFees, tuitionFees });
    return NextResponse.json(newFee, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Error adding fees" }, { status: 500 });
  }
}

// ✅ PUT - Update an existing fee entry
export async function PUT(req) {
  try {
    await connectDB();
    const { id, grade, regFees, admissionFees, tuitionFees } = await req.json();

    if (!id || !grade || regFees == null || admissionFees == null || tuitionFees == null) {
      return NextResponse.json({ error: "ID and all fields are required" }, { status: 400 });
    }

    const updatedFee = await FeesModel.findByIdAndUpdate(
      id,
      { grade, regFees, admissionFees, tuitionFees },
      { new: true }
    );

    if (!updatedFee) {
      return NextResponse.json({ error: "Fee entry not found" }, { status: 404 });
    }

    return NextResponse.json(updatedFee);
  } catch (error) {
    return NextResponse.json({ error: "Error updating fees" }, { status: 500 });
  }
}

// ✅ DELETE - Remove a fee entry
export async function DELETE(req) {
  try {
    await connectDB();
    const { id } = await req.json();

    if (!id) {
      return NextResponse.json({ error: "ID is required" }, { status: 400 });
    }

    const deletedFee = await FeesModel.findByIdAndDelete(id);

    if (!deletedFee) {
      return NextResponse.json({ error: "Fee entry not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Fee entry deleted successfully" });
  } catch (error) {
    return NextResponse.json({ error: "Error deleting fees" }, { status: 500 });
  }
}
