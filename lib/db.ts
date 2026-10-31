import fs from "fs";
import path from "path";

export interface EnquiryRecord {
  id: string; // e.g. SR-2026-1042
  name: string;
  phone: string;
  email?: string;
  enquiryType: string; // "Room Stay" | "Swimming Pool" | "Convention Hall" | "Wedding" | "Private Party" | "Corporate" | "General"
  requestedDate?: string;
  checkOutDate?: string;
  guestCount?: string;
  roomsCount?: string;
  arrangements?: string;
  message?: string;
  status: "New" | "Contacted" | "Confirmed" | "Cancelled";
  notes?: string;
  createdAt: string; // ISO date
  source: "Modal" | "Rooms Page" | "Convention Page" | "Contact Page" | "Estimator";
}

export interface PropertyStatus {
  poolStatus: "Open Today" | "Closed for Private Event" | "Seasonal Maintenance";
  poolHours: string;
  deskStatus: "Online" | "Away";
  specialAnnouncement: string;
  activePromotions: string;
  updatedAt: string;
}

const STORAGE_DIR = path.join(process.cwd(), "data", "storage");
const ENQUIRIES_FILE = path.join(STORAGE_DIR, "enquiries.json");
const STATUS_FILE = path.join(STORAGE_DIR, "property-status.json");

// Ensure storage directory and files exist
function ensureStorage() {
  if (!fs.existsSync(STORAGE_DIR)) {
    fs.mkdirSync(STORAGE_DIR, { recursive: true });
  }

  if (!fs.existsSync(ENQUIRIES_FILE)) {
    const initialEnquiries: EnquiryRecord[] = [
      {
        id: "SR-2026-1001",
        name: "Rameshwar Rao",
        phone: "+91 98490 12345",
        email: "rameshwar@example.com",
        enquiryType: "Convention Hall & Wedding",
        requestedDate: "2026-11-20",
        guestCount: "450 Guests",
        arrangements: "Hall + Lawn Setup",
        message: "Looking for wedding ceremony and evening reception hall setup.",
        status: "New",
        createdAt: new Date(Date.now() - 3600000 * 5).toISOString(),
        source: "Convention Page",
      },
      {
        id: "SR-2026-1002",
        name: "Pooja Reddy",
        phone: "+91 99887 65432",
        enquiryType: "Room Stay",
        requestedDate: "2026-11-15",
        checkOutDate: "2026-11-17",
        guestCount: "4 Adults",
        roomsCount: "2 Rooms",
        message: "Weekend family getaway with swimming pool access.",
        status: "Contacted",
        notes: "Shared room tariffs via WhatsApp. Awaiting confirmation.",
        createdAt: new Date(Date.now() - 3600000 * 24).toISOString(),
        source: "Rooms Page",
      },
      {
        id: "SR-2026-1003",
        name: "Kiran Kumar",
        phone: "+91 97000 55443",
        enquiryType: "Swimming Pool Access",
        requestedDate: "2026-11-08",
        guestCount: "8 Friends",
        message: "Day pass swimming pool enquiry for Sunday afternoon.",
        status: "Confirmed",
        notes: "Confirmed for Sunday 11 AM slot.",
        createdAt: new Date(Date.now() - 3600000 * 48).toISOString(),
        source: "Modal",
      },
    ];
    fs.writeFileSync(ENQUIRIES_FILE, JSON.stringify(initialEnquiries, null, 2), "utf-8");
  }

  if (!fs.existsSync(STATUS_FILE)) {
    const defaultStatus: PropertyStatus = {
      poolStatus: "Open Today",
      poolHours: "7:00 AM – 7:00 PM Daily",
      deskStatus: "Online",
      specialAnnouncement: "Now accepting bookings for upcoming wedding season and weekend day-pool visits.",
      activePromotions: "Special package rates for combined Convention Hall + Suite bookings.",
      updatedAt: new Date().toISOString(),
    };
    fs.writeFileSync(STATUS_FILE, JSON.stringify(defaultStatus, null, 2), "utf-8");
  }
}

// Get all enquiries
export async function getEnquiries(): Promise<EnquiryRecord[]> {
  ensureStorage();
  try {
    const data = fs.readFileSync(ENQUIRIES_FILE, "utf-8");
    return JSON.parse(data);
  } catch (err) {
    console.error("Failed to read enquiries:", err);
    return [];
  }
}

// Add a new enquiry
export async function createEnquiry(
  data: Omit<EnquiryRecord, "id" | "status" | "createdAt">
): Promise<EnquiryRecord> {
  ensureStorage();
  const list = await getEnquiries();
  const idNumber = 1000 + list.length + 1;
  const newRecord: EnquiryRecord = {
    ...data,
    id: `SR-2026-${idNumber}`,
    status: "New",
    createdAt: new Date().toISOString(),
  };

  list.unshift(newRecord);
  fs.writeFileSync(ENQUIRIES_FILE, JSON.stringify(list, null, 2), "utf-8");
  return newRecord;
}

// Update enquiry status or notes
export async function updateEnquiry(
  id: string,
  updates: Partial<Pick<EnquiryRecord, "status" | "notes">>
): Promise<EnquiryRecord | null> {
  ensureStorage();
  const list = await getEnquiries();
  const index = list.findIndex((e) => e.id === id);
  if (index === -1) return null;

  list[index] = { ...list[index], ...updates };
  fs.writeFileSync(ENQUIRIES_FILE, JSON.stringify(list, null, 2), "utf-8");
  return list[index];
}

// Delete an enquiry
export async function deleteEnquiry(id: string): Promise<boolean> {
  ensureStorage();
  const list = await getEnquiries();
  const filtered = list.filter((e) => e.id !== id);
  if (filtered.length === list.length) return false;

  fs.writeFileSync(ENQUIRIES_FILE, JSON.stringify(filtered, null, 2), "utf-8");
  return true;
}

// Get dynamic property status
export async function getPropertyStatus(): Promise<PropertyStatus> {
  ensureStorage();
  try {
    const data = fs.readFileSync(STATUS_FILE, "utf-8");
    return JSON.parse(data);
  } catch {
    return {
      poolStatus: "Open Today",
      poolHours: "7:00 AM – 7:00 PM Daily",
      deskStatus: "Online",
      specialAnnouncement: "Welcome to Suraj Resorts & Convention Hall.",
      activePromotions: "Special packages available for weddings and celebrations.",
      updatedAt: new Date().toISOString(),
    };
  }
}

// Update dynamic property status
export async function updatePropertyStatus(
  statusUpdates: Partial<PropertyStatus>
): Promise<PropertyStatus> {
  ensureStorage();
  const current = await getPropertyStatus();
  const updated = {
    ...current,
    ...statusUpdates,
    updatedAt: new Date().toISOString(),
  };
  fs.writeFileSync(STATUS_FILE, JSON.stringify(updated, null, 2), "utf-8");
  return updated;
}

