import { connectDB } from "@/lib/db";
import CalendarModel from "@/models/Calendar";
import { NextResponse } from "next/server";

// ✅ GET all calendar events
export async function GET() {
  try {
    await connectDB();

    // Define custom month order (April to March)
    const customMonthOrder = {
      "April": 1, "May": 2, "June": 3, "July": 4, "August": 5, "September": 6,
      "October": 7, "November": 8, "December": 9, "January": 10, "February": 11, "March": 12
    };

    let events = await CalendarModel.find({});

    // Sorting logic
    events.sort((a, b) => {
      // Compare months first using custom order
      const monthComparison = customMonthOrder[a.month] - customMonthOrder[b.month];
      if (monthComparison !== 0) return monthComparison;

      // Extract numerical part of date
      const extractNumber = (dateStr) => {
        const match = dateStr.match(/\d+/); // Find the first number in the date string
        return match ? parseInt(match[0]) : 0;
      };

      // Compare dates within the same month
      return extractNumber(a.date) - extractNumber(b.date);
    });

    // Ensure API response includes proper month names
    const formattedEvents = events.map(event => ({
      month: event.month, // Keeps the month name
      date: event.date,
      event: event.event
    }));

    return NextResponse.json(formattedEvents);
  } catch (error) {
    return NextResponse.json({ error: "Error fetching events" }, { status: 500 });
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
