"use client";

import React from "react";
import { useRouter } from "next/navigation";
import TooltipWrapper from "@/components/TooltipWrapper";
import { Button } from "@/components/ui/button";
import { ChevronLeftIcon } from "lucide-react";
import SaveBtn from "@/app/workflow/_components/topbar/SaveBtn";

interface Props {
  title: string;
  subTitle?: string;
  workflowId: string;
}

function Topbar({ title, subTitle, workflowId }: Props) {
  const router = useRouter();

  return (
    <div className="flex p-2 border-b-2 border-separate justify-between w-full h-[60px] sticky top-0 bg-background z-10">
      <div className="flex gap-1 flex-1 items-center">
        <TooltipWrapper content={"Back"}>
          <Button variant={"ghost"} size="icon" onClick={() => router.back()}>
            <ChevronLeftIcon size={20} />
          </Button>
        </TooltipWrapper>

        <div>
          <p className="font-bold text-ellipsis truncate">{title}</p>
          {subTitle && (
            <p className="text-xs text-muted-foreground truncate text-ellipsis">
              {subTitle}
            </p>
          )}
        </div>
      </div>
      <div className="flex gap-1 flex-1 justify-end">
        <SaveBtn workflowId={workflowId} />
      </div>
    </div>
  );
}

export default Topbar;
