import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans bg-linear-to-br from-purple-700 to-purple-900">
      <h1 className="text-5xl font-bold text-amber-400 mb-10">Couriway No Reset Bingo</h1>
      <div className="text-center flex space-x-10 text-2xl items-center my-4 font-semibold">
        <div className="btn bg-yellow-600 rounded-lg px-4 py-3 text-black"><Link href="/bingo">Bingo</Link></div>
        <div className="btn bg-yellow-600 rounded-lg px-4 py-3 text-black"><Link href="/100k">100k Bingo</Link></div>
      </div>
    </div>
  );
}
