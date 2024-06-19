"use client";
import Navbar from "@/components/Navbar/Navbar";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-[#181A2A]">
      <Navbar />
      <Button
        onClick={() => {
          alert("Woooohooooo");
        }}
      >
        Click here
      </Button>
    </main>
  );
}
