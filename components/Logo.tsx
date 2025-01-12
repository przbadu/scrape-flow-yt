import React from "react";
import Link from "next/link";
import clsx from "clsx";
import { cn } from "@/lib/utils";
import { SquareDashedMousePointer } from "lucide-react";

const Logo = ({
  fontSize = "text-2xl",
  iconSize = 20,
}: {
  fontSize?: string;
  iconSize?: number;
}) => {
  return (
    <div className="flex gap-2 items-center">
      <Link
        href="/"
        className={cn(
          "text-2xl font-extrabold flex items-center gap-2",
          fontSize
        )}
      >
        <div className="rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 p-2">
          <SquareDashedMousePointer size={iconSize} className="stroke-white" />
        </div>

        <div>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-emerald-600">
            Scrape
          </span>
          <span className="text-stone-700 dark:text-stone-300">Flow</span>
        </div>
      </Link>
    </div>
  );
};

export default Logo;
