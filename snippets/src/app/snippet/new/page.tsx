"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useActionState } from "react";
import * as actions from "@/actions"

export default function AddNewSnippetPage() {

  const [state,formAction,pending] = useActionState(actions.createSnippet,{message:""},)



  return (
    <div className="border-1 rounded bg-gray-100 max-w-[700px] h-auto p-10 mt-20 mx-auto">
      <h1 className="text-2xl font-bold text-center pb-5">
        👩‍💻Add Your Code Snippets
      </h1>
      <form action={formAction}>
        <div className="flex flex-col justify-between gap-2 mb-3">
          <Label>Title</Label>
          <Input id="title" name="title" placeholder="Enter your title" />
         
        </div>
        <div className="flex flex-col justify-between gap-2 mb-3">
          <Label>Code</Label>
          <Textarea id="code" name="code" placeholder="Enter your code" />
        </div>
        {state?.message && <span className="p-2 text-red-500">{state?.message}</span>}
        <Button disabled={pending} type="submit">Submit</Button>
      </form>
       
    </div>
  );
}

