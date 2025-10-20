"use client";

import { Button } from "@/components/Button";

export default function Home() {
  return (
    <div className="w-screen h-screen flex justify-center items-center gap-1.5">
      <Button
        onClick={() => {
          alert("OPA, CLICOU AI CARA");
        }}
        text="clica ai irmao"
      ></Button>
    </div>
  );
}
