import Link from "next/link"

export default function Page() {
  return (
    <div className="bg-[#f5f5f5] text-[#333] font-serif mx-auto max-w-4xl px-8 py-12 shadow-lg">
      <h1 className="text-4xl font-bold mb-8">My custom library</h1>
      <h2 className="text-4xl font-bold mb-8">Table of Contents</h2>
      <ul className="list-decimal list-inside space-y-6">
        <li className="text-red-600">
          <Link href={`/hobbes`}> The book </Link></li>
          <li className="text-yellow-600">
         Motivation (to be written up) </li>
      </ul>
    </div>
  )
}
