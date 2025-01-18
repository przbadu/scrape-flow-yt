"use server";

import { prisma } from "@/lib/prisma";
import {
  createWorkflowSchema,
  createWorkflowSchemaType,
} from "@/schema/workflow";
import { WorkflowStatus } from "@/types/workflow";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { AppNode } from "@/types/appNode";
import { CreateFlowNode } from "@/lib/workflow/createFlowNode";
import { TaskType } from "@/types/task";
import { Edge } from "@xyflow/react";

export async function CreateWorkflow(form: createWorkflowSchemaType) {
  const { success, data } = createWorkflowSchema.safeParse(form);

  if (!success) {
    throw new Error("Invalid form data");
  }

  const { userId } = await auth();

  if (!userId) {
    throw new Error("Unauthenticated");
  }

  const initialFlow: { nodes: AppNode[]; edges: Edge[] } = {
    nodes: [],
    edges: [],
  };
  // lets add the flow entry point
  initialFlow.nodes.push(CreateFlowNode(TaskType.LAUNCH_BROWSER));

  const result = await prisma.workflow.create({
    data: {
      status: WorkflowStatus.DRAFT,
      definition: JSON.stringify(initialFlow),
      ...data,
      userId,
    },
  });

  if (!result) {
    throw new Error("Failed to create workflow");
  }

  redirect(`/workflow/editor/${result.id}`);
}
