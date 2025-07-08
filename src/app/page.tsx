import Image from "next/image";
import { Component as VapourTextDemo } from "@/components/ui/vapour-text-effect";

export default function Home() {
  return (
    <div className="w-full flex justify-center items-center min-h-[300px]">
      <VapourTextDemo />
    </div>
  );
}
