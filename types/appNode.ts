import { Node } from "@xyflow/react";
import { TaskParams, TaskType } from "./task";

export interface AppNodeData {
  type: TaskType;
  inputs: Record<string, string>;
  [key: string]: any;
}

export interface AppNode extends Node {
  data: AppNodeData;
}

export interface ParamProps {
  params: TaskParams;
  value: string;
  updateNodeParamsValue: (newValue: string) => void;
}
