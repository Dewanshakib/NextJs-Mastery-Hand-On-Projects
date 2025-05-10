import { DeleteSnippet } from "@/actions";
import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

export default async function SnippetDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // Snippet id
  const id = parseInt((await params).id);

  await new Promise((r) => setTimeout(r,1000))
  // Getting snippet
  const snippet = await prisma.snippet.findUnique({
    where: {
      id,
    },
  });
  // Delete Snippet 
  const deleteSnippetAction = DeleteSnippet.bind(null, id);

  if (!snippet) return notFound()

  return (
    <div className=" max-w-full h-auto p-4 rounded">
      <div className="flex flex-row justify-between gap-3">
        <h1 className="text-xl font-bold">{snippet?.title}</h1>
        <div className="flex flex-row justify-between gap-3">
          <Link href={`/snippet/${id}/edit`}>
            <Button>Edit</Button>
          </Link>
          <form action={deleteSnippetAction}>
            <Button variant={"destructive"}>Delete</Button>
          </form>
        </div>
      </div>

      <pre className="text-lg bg-red-200 p-2 rounded mt-5 opacity-80 font-medium">
        <code>{snippet?.code}</code>
      </pre>
    </div>
  );
}

export const generateStaticParams = async () => {
  const snippet = await prisma.snippet.findMany()

  return snippet.map((snippet) => {
    return {id:snippet.id.toString()}
  })
}