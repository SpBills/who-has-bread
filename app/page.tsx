import { GoogleSpreadsheet } from "google-spreadsheet";

export default async function Home() {
  const doc = new GoogleSpreadsheet("1o0MRNNuKSikLnYuEk-bAEZgjA6S7N9uJDgqcwqrhbUE");

  await doc.useServiceAccountAuth({
    client_email: process.env.GOOGLE_CLIENT_EMAIL ?? "",
    private_key: process.env.GOOGLE_PRIVATE_KEY ?? "",
  });

  await doc.loadInfo();

  const sheet = doc.sheetsByTitle["bread"];
  const rows = await sheet.getRows();
  const today = new Date();
  const sorted = rows.sort((a, b) => {
    const distA = Math.abs(today.getTime() - Date.parse(a.date));
    const distB = Math.abs(today.getTime() - Date.parse(b.date));
    return distA - distB;
  });

  const { person, date } = sorted[0];

  return (
    <main className="w-full h-screen flex justify-center">
      <div className="w-96 md:w-1/3 h-52 mt-32">
        <h1 className="text-5xl font-bold">Who has Bread?</h1>
        <p className="opacity-50 mt-3">A small utility for Living Water OPC</p>

        <div className="mt-10">
          <h2 className="text-3xl font-semibold">Next week:</h2>
          <p className="w-44 h-5 rounded mt-2">{person} - {date}</p>
        </div>
      </div>
    </main>
  )
}
