import { NextResponse } from "next/server";
import connectDB from "/Backend/config/db";
import Gallery from "/Backend/models/Gallery";


connectDB(); // Connect to MongoDB

// Get all fee structures (GET request)
export async function GET() {
  try {
    const gallery = await Gallery.find({}); // Fetch all fee entries from MongoDB
    return NextResponse.json(gallery, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch Gallery" }, { status: 500 });
  }
}
export async function POST(request) {
  try {
    const body = await request.json(); // Correct way to parse request body in Next.js
    const {title,images } = body;

    const newgallery = new Gallery({ title,images });
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

    const updatedFee = await Gallery.findByIdAndUpdate(
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

    const deletedFee = await Gallery.findByIdAndDelete(_id);

    if (!deletedFee) {
      return NextResponse.json({ error: "Fee entry not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Fee entry deleted successfully" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete fee entry", details: error.message }, { status: 500 });
  }
}