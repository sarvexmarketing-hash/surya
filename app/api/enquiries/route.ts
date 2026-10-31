import { NextResponse } from "next/server";
import { getEnquiries, createEnquiry, updateEnquiry, deleteEnquiry } from "@/lib/db";
import nodemailer from "nodemailer";

// GET /api/enquiries
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get("type");
    const status = searchParams.get("status");
    const search = searchParams.get("search")?.toLowerCase().trim();

    let enquiries = await getEnquiries();

    if (type && type !== "all") {
      enquiries = enquiries.filter((e) =>
        e.enquiryType.toLowerCase().includes(type.toLowerCase())
      );
    }

    if (status && status !== "all") {
      enquiries = enquiries.filter(
        (e) => e.status.toLowerCase() === status.toLowerCase()
      );
    }

    if (search) {
      enquiries = enquiries.filter(
        (e) =>
          e.name.toLowerCase().includes(search) ||
          e.phone.toLowerCase().includes(search) ||
          e.id.toLowerCase().includes(search)
      );
    }

    return NextResponse.json({ success: true, count: enquiries.length, enquiries });
  } catch (error) {
    console.error("GET /api/enquiries error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch enquiries." },
      { status: 500 }
    );
  }
}

// POST /api/enquiries
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      name,
      phone,
      email,
      enquiryType,
      requestedDate,
      checkOutDate,
      guestCount,
      roomsCount,
      arrangements,
      message,
      source = "Modal",
    } = body;

    // Validation
    if (!name || typeof name !== "string" || name.trim().length === 0) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid name." },
        { status: 400 }
      );
    }

    if (!phone || typeof phone !== "string" || phone.trim().length < 8) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid contact phone number." },
        { status: 400 }
      );
    }

    // Create persistent record
    const record = await createEnquiry({
      name: name.trim(),
      phone: phone.trim(),
      email: email ? email.trim() : undefined,
      enquiryType: enquiryType || "General Enquiry",
      requestedDate,
      checkOutDate,
      guestCount,
      roomsCount,
      arrangements,
      message,
      source,
    });

    // Optional SMTP notification if credentials exist
    if (process.env.EMAIL_USER && process.env.EMAIL_APP_PASSWORD) {
      try {
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_APP_PASSWORD,
          },
        });

        await transporter.sendMail({
          from: process.env.EMAIL_USER,
          to: process.env.ENQUIRY_NOTIFICATION_EMAIL || process.env.EMAIL_USER,
          replyTo: email || undefined,
          subject: `[${record.id}] New Enquiry: ${record.enquiryType} from ${record.name}`,
          html: `
            <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #C6A56B; border-radius: 12px; background: #FAF8F5;">
              <h2 style="color: #12352B; border-bottom: 2px solid #C6A56B; padding-bottom: 12px; margin-top: 0;">Suraj Resorts — New Enquiry (${record.id})</h2>
              <p><strong>Customer Name:</strong> ${record.name}</p>
              <p><strong>Phone:</strong> <a href="tel:${record.phone}" style="color: #12352B; font-weight: bold;">${record.phone}</a></p>
              <p><strong>Enquiry Type:</strong> ${record.enquiryType}</p>
              <p><strong>Target Date:</strong> ${record.requestedDate || "Not specified"}</p>
              <p><strong>Guests:</strong> ${record.guestCount || "Not specified"}</p>
              <p><strong>Source:</strong> ${record.source}</p>
              <h3 style="color: #12352B;">Requirements:</h3>
              <div style="background: white; padding: 14px; border-radius: 8px; border: 1px solid #E5D2AB;">
                ${record.message || "No additional message."}
              </div>
            </div>
          `,
        });
      } catch (mailErr) {
        console.error("Email notification could not be sent:", mailErr);
      }
    }

    return NextResponse.json(
      {
        success: true,
        message: "Your enquiry has been registered successfully with Suraj Resorts.",
        referenceId: record.id,
        record,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("POST /api/enquiries error:", error);
    return NextResponse.json(
      { success: false, error: "An unexpected error occurred while saving the enquiry." },
      { status: 500 }
    );
  }
}

// PATCH /api/enquiries (update status / notes)
export async function PATCH(request: Request) {
  try {
    const body = await request.json();
    const { id, status, notes } = body;

    if (!id) {
      return NextResponse.json(
        { success: false, error: "Enquiry ID is required." },
        { status: 400 }
      );
    }

    const updated = await updateEnquiry(id, { status, notes });
    if (!updated) {
      return NextResponse.json(
        { success: false, error: "Enquiry not found." },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, updated });
  } catch (error) {
    console.error("PATCH /api/enquiries error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to update enquiry." },
      { status: 500 }
    );
  }
}

// DELETE /api/enquiries
export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { success: false, error: "Enquiry ID is required." },
        { status: 400 }
      );
    }

    const success = await deleteEnquiry(id);
    return NextResponse.json({ success });
  } catch (error) {
    console.error("DELETE /api/enquiries error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to delete enquiry." },
      { status: 500 }
    );
  }
}

