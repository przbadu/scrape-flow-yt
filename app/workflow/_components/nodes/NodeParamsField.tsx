"use client";

import { TaskParams, TaskParamsType } from "@/types/task";
import { Input } from "@/components/ui/input";
import StringParams from "@/app/workflow/_components/nodes/params/StringParams";
import { useReactFlow } from "@xyflow/react";
import { useCallback } from "react";

function NodeParamsField({
  params,
  nodeId,
}: {
  params: TaskParams;
  nodeId: string;
}) {
  const { updateNodeData, getNode } = useReactFlow();
  const node = getNode(nodeId);
  const value = node?.data?.inputs?.[params.name];
  console.log("@VALUE", value);

  const updateNodeParamsValue = useCallback(
    (newValue: string) => {
      updateNodeData(nodeId, {
        inputs: {
          ...node?.data?.inputs,
          [params.name]: newValue,
        },
      });
    },
    [nodeId, updateNodeData, params.name, node?.data?.inputs],
  );

  switch (params.type) {
    case TaskParamsType.STRING:
      return (
        <StringParams
          params={params}
          value={value}
          updateNodeParamsValue={updateNodeParamsValue}
        />
      );
    default:
      return (
        <div className={"w-full"}>
          <p className="text-xs text-muted-foreground">Not Implemented</p>
        </div>
      );
  }
}

export default NodeParamsField;
