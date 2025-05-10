
import EditSnippetForm from "@/components/EditSnippetForm"
import { prisma } from "@/lib/prisma"


export default async function SnippetEditPage(
    {params}:{params:Promise<{id:string}>}
) {

    const id = parseInt((await params).id)
    const snippet = await prisma.snippet.findUnique({
      where:{
        id
      }
    })

    if(!snippet) return <p className='text-2xl font-bold'>No snippet Found</p>

  return (
    <div>
        <EditSnippetForm snippet={snippet}/>
    </div>
  )
}
