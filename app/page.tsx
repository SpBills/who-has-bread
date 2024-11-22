import { Who } from "@/components/Who";

export default async function Home() {
  const today = new Date().toISOString().split("T")[0];

  return (
    <main className="w-full h-screen flex justify-center">
      <div className="w-96 md:w-1/3 h-52 mt-32">
        <h1 className="text-5xl font-bold">Who has Bread?</h1>
        <p className="opacity-50 mt-3">A small utility for Living Water OPC</p>

        <div className="mt-10">
          <h2 className="text-3xl font-semibold">Next week:</h2>
          <div className="mt-5">
            <Who path={`/api/bread?today=${today}`} />
          </div>
        </div>
      </div>
    </main>
  )
}
