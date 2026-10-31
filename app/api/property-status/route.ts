import { NextResponse } from "next/server";
import { getPropertyStatus, updatePropertyStatus } from "@/lib/db";

// GET /api/property-status
export async function GET() {
  try {
    const status = await getPropertyStatus();
    return NextResponse.json({ success: true, status });
  } catch (error) {
    console.error("GET /api/property-status error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch property status." },
      { status: 500 }
    );
  }
}

// POST or PATCH /api/property-status
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const updated = await updatePropertyStatus(body);
    return NextResponse.json({ success: true, status: updated });
  } catch (error) {
    console.error("POST /api/property-status error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to update property status." },
      { status: 500 }
    );
  }
}

