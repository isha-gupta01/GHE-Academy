import { connectDB } from "@/lib/db";
import CalendarModel from "@/models/Calendar";
import { NextResponse } from "next/server";

// ✅ GET all calendar events
export async function GET() {
  try {
    await connectDB();

    // Fetch events from MongoDB
    let events = await CalendarModel.find({}).lean();

    // Mapping month numbers to names (Indian Academic Calendar Order)
    const monthNames = {
      4: "April", 5: "May", 6: "June", 7: "July", 8: "August", 
      9: "September", 10: "October", 11: "November", 12: "December",
      1: "January", 2: "February", 3: "March"
    };

    // Convert month numbers to names and sort
    events = events.map(event => ({
      ...event,
      month: monthNames[event.month] || event.month // Convert month number to name
    })).sort((a, b) => {
      // Custom sorting logic for academic year (April - March)
      const academicMonthOrder = {
        "April": 1, "May": 2, "June": 3, "July": 4, "August": 5, 
        "September": 6, "October": 7, "November": 8, "December": 9,
        "January": 10, "February": 11, "March": 12
      };

      const monthOrderA = academicMonthOrder[a.month] || 99;
      const monthOrderB = academicMonthOrder[b.month] || 99;

      if (monthOrderA !== monthOrderB) {
        return monthOrderA - monthOrderB; // Sort by month
      }

      // Sort by date within each month
      const dateA = parseInt(a.date.match(/\d+/) ? a.date.match(/\d+/)[0] : "0", 10);
      const dateB = parseInt(b.date.match(/\d+/) ? b.date.match(/\d+/)[0] : "0", 10);

      return dateA - dateB;
    });

    return NextResponse.json(events);
  } catch (error) {
    console.error("Error fetching academic calendar:", error);
    return NextResponse.json({ error: "Error fetching academic calendar" }, { status: 500 });
  }
}





// ✅ POST - Add a new calendar event
export async function POST(req) {
  try {
    await connectDB();
    const { month, date, event } = await req.json();

    if (!month || !date || !event) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    const newEvent = await CalendarModel.create({ month, date, event });
    return NextResponse.json(newEvent, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Error adding event" }, { status: 500 });
  }
}

// ✅ PUT - Update an existing calendar event
export async function PUT(req) {
  try {
    await connectDB();
    const { id, month, date, event } = await req.json();

    if (!id || !month || !date || !event) {
      return NextResponse.json({ error: "ID and all fields are required" }, { status: 400 });
    }

    const updatedEvent = await CalendarModel.findByIdAndUpdate(id, { month, date, event }, { new: true });

    if (!updatedEvent) {
      return NextResponse.json({ error: "Event not found" }, { status: 404 });
    }

    return NextResponse.json(updatedEvent);
  } catch (error) {
    return NextResponse.json({ error: "Error updating event" }, { status: 500 });
  }
}

// ✅ DELETE - Remove a calendar event
export async function DELETE(req) {
  try {
    await connectDB();
    const { id } = await req.json();

    if (!id) {
      return NextResponse.json({ error: "ID is required" }, { status: 400 });
    }
    const deletedEvent = await CalendarModel.findByIdAndDelete(id);

    if (!deletedEvent) {
      return NextResponse.json({ error: "Event not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Event deleted successfully" });
  } catch (error) {
    return NextResponse.json({ error: "Error deleting event" }, { status: 500 });
  }
}
