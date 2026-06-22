import { NextResponse } from "next/server";
import { fetchGuardianNews } from "@/lib/guardian";

export async function GET() {
  try {
    const articles = await fetchGuardianNews();
    return NextResponse.json({ success: true, articles });
  } catch (error: any) {
    console.error("Guardian API Route Error:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Failed to fetch articles" },
      { status: 500 }
    );
  }
}
