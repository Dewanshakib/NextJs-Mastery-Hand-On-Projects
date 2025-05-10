"use client";

import { Editor } from "@monaco-editor/react";
import { Snippet } from "@/generated/prisma";
import { useState} from "react";
import { Button } from "./ui/button";
import { EditSnippetCode } from "@/actions";

const EditSnippetForm = ({ snippet }: { snippet: Snippet }) => {
  const [code, setCode] = useState(snippet.code);

  const editCode = (code:string = "") => {
    setCode(code)
  }

  const editSnippetAction = EditSnippetCode.bind(null,snippet.id,code)



  return (
    <div className="w-full h-auto">
      <form action={editSnippetAction}>
        <h1 className=" text-3xl mb-3 text-center font-bold text-blue-500"> 🧑‍💻 Your Code Editor</h1>
        <Button type="submit" className="w-full mb-4" size="lg">
          Update
        </Button>
      </form>
      <Editor
        onChange={editCode}
        theme="vs-dark"
        language="javascript"
        defaultValue={code}
        height="40vh"
        className="rounded-xl overflow-hidden"
      />
    </div>
  );
};

export default EditSnippetForm;
