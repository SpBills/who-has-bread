import { Who } from "@/components/Who";
import { GoogleSpreadsheet } from "google-spreadsheet";

function getNextDayOfWeek(date: Date, dayOfWeek: number) {
  var resultDate = new Date(date.getTime());
  resultDate.setDate(date.getDate() + (7 + dayOfWeek - date.getDay()) % 7);
  return resultDate;
}

export const revalidate = 3600;

export default async function Setup() {
  return (
    <main className="w-full h-screen flex justify-center">
      <div className="w-96 md:w-1/3 h-52 mt-32">
        <h1 className="text-5xl font-bold">Who is Doing Setup?</h1>
        <p className="opacity-50 mt-3">A small utility for Living Water OPC</p>

        <div className="mt-10">
          <h2 className="text-3xl font-semibold">Next week:</h2>
          <div className="mt-5">
            <Who path={`/api/team`} />
          </div>
        </div>
      </div>
    </main>
  )
}
