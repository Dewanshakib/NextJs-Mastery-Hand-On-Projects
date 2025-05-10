import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import Link from "next/link";

//export const dynamic = "force-dynamic" // disable caching -> Dyanimic Route 
// export const revalidate = 0; // Always load freah data no caching

export default async function Home() {

  const data = await prisma.snippet.findMany()
  // console.log(data)

  return <div className="">
    <div className="flex justify-between items-center">
      <div className="">
      <Link href={'/'} className="text-2xl font-bold">Home</Link>
      <h1 className="text-xl font-semibold opacity-80">Snippets</h1>
    </div>
    <Link href={'/snippet/new'}><Button className="mt-2">New</Button></Link>
    </div>
    
    {/* All Snippets */}
    {
      data.length <= 0 ? (<h1 className="text-center font-bold text-2xl">No Snippet added Yet.....</h1>) : (
        data.map((s,i) => (<div key={i} className="p-2 bg-indigo-400 mt-8 rounded flex justify-between items-center">
      <h1 className="text-lg font-medium text-white">• {s.title}</h1>
      <Link href={`/snippet/${s.id}`}><Button variant={'secondary'}>View</Button></Link>
    </div>))
      )
    }
  </div>;
}
