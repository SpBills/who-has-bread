import { getNextDayOfWeek } from "@/lib/dates";
import { getSheet } from "@/lib/sheets";
import { NextResponse } from "next/server";

export const revalidate = 600;

export async function GET(request: Request) {
  const searchParams = request.nextUrl.searchParams;
  const todayParam = searchParams.get("today");

  if (!todayParam) {
    return NextResponse.json({ error: "No date provided" }, { status: 400 });
  }

  const doc = await getSheet();
  const sheet = doc.sheetsByTitle["bread"];
  const rows = await sheet.getRows();

  const today = getNextDayOfWeek(new Date(todayParam), 0);
  const sorted = rows.sort((a, b) => {
    const distA = Math.abs(today.getTime() - Date.parse(a.date));
    const distB = Math.abs(today.getTime() - Date.parse(b.date));
    return distA - distB;
  });

  const { person, date } = sorted[0];

  return NextResponse.json({ person, date });
}