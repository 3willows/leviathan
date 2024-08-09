import Link from "next/link"

export default function Page() {
  return (
    <div className="bg-[#f5f5f5] text-[#333] font-serif mx-auto max-w-4xl px-8 py-12 shadow-lg">
      <h1 className="text-4xl font-bold mb-8">My custom library</h1>
      <h2 className="text-4xl font-bold mb-8">Table of Contents</h2>
      <ul className="list-decimal list-inside space-y-6">
        <li className="text-red-600">
          <Link href={`/hobbes`}> The book </Link></li>
          <li className="text-yellow-600"> <a href="https://3willows.github.io/2024-07-29-learn-next.js-leviathan/" rel="noopener noreferrer" >Motivation</a>
           </li>
         <li className="text-green-600"><a href="https://github.com/3willows/leviathan">Public repo</a></li>
      </ul>
    </div>
  )
}
