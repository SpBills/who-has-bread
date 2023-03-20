import { GoogleSpreadsheet } from "google-spreadsheet";

export async function getSheet() {
  const doc = new GoogleSpreadsheet("1o0MRNNuKSikLnYuEk-bAEZgjA6S7N9uJDgqcwqrhbUE");

  await doc.useServiceAccountAuth({
    client_email: process.env.GOOGLE_CLIENT_EMAIL ?? "",
    private_key: process.env.GOOGLE_PRIVATE_KEY ?? "",
  });

  await doc.loadInfo();

  return doc;
}