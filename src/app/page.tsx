import { Component as VapourTextDemo } from "@/components/ui/vapour-text-effect";
import { memo } from "react";

export default function Home() {
  return (
    <div className="w-full flex justify-center items-center min-h-[300px]">
      <VapourTextDemo />
    </div>
  );
}

const SeoElement = memo(({ tag = Tag.P, texts }: { tag: Tag, texts: string[] }) => {
  // ...
});
SeoElement.displayName = "SeoElement";
