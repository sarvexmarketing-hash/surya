import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, enquiryType, message } = body;

    // Validate required fields
    if (!firstName || !phone) {
      return NextResponse.json(
        { error: "Please provide your name and phone number." },
        { status: 400 }
      );
    }

    // Check if email transporter can be initialized
    if (process.env.EMAIL_USER && process.env.EMAIL_APP_PASSWORD) {
      try {
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_APP_PASSWORD,
          },
        });

        const mailOptions = {
          from: process.env.EMAIL_USER,
          to: process.env.ENQUIRY_NOTIFICATION_EMAIL || process.env.EMAIL_USER,
          replyTo: email || undefined,
          subject: `Suraj Resorts Enquiry: ${enquiryType || "General"} from ${firstName} ${lastName || ""}`,
          html: `
            <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #C6A56B; border-radius: 8px;">
              <h2 style="color: #163D32; border-bottom: 2px solid #C6A56B; padding-bottom: 15px;">Suraj Resorts & Convention Hall - New Enquiry</h2>
              <p style="color: #292D29; font-size: 16px;"><strong>Name:</strong> ${firstName} ${lastName || ""}</p>
              <p style="color: #292D29; font-size: 16px;"><strong>Phone:</strong> <a href="tel:${phone}" style="color: #163D32; font-weight: bold;">${phone}</a></p>
              <p style="color: #292D29; font-size: 16px;"><strong>Email:</strong> ${email || "Not provided"}</p>
              <p style="color: #292D29; font-size: 16px;"><strong>Enquiry Type:</strong> ${enquiryType || "General"}</p>
              <h3 style="color: #163D32; margin-top: 25px; font-size: 18px;">Details / Message:</h3>
              <div style="background-color: #F8F6F0; padding: 15px; border-radius: 6px; color: #333; font-size: 14px; line-height: 1.6; white-space: pre-wrap; border: 1px solid #eaeaea;">
                ${message || "No specific details provided."}
              </div>
            </div>
          `,
        };

        await transporter.sendMail(mailOptions);
      } catch (err) {
        console.error("Failed sending email notification:", err);
      }
    } else {
      console.log(
        "EMAIL_USER or EMAIL_APP_PASSWORD not set. Logged enquiry locally:",
        { firstName, lastName, phone, enquiryType, message }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Enquiry received successfully. Our team will contact you shortly.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred while processing your enquiry." },
      { status: 500 }
    );
  }
}
