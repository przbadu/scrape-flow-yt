"use client";

import React from "react";
import { Workflow } from "@prisma/client";
import { ReactFlowProvider } from "@xyflow/react";
import FlowEditor from "./FlowEditor";
import Topbar from "@/app/workflow/_components/topbar/Topbar";
import TaskMenu from "@/app/workflow/_components/TaskMenu";

const Editor = ({ workflow }: { workflow: Workflow }) => {
  return (
    <ReactFlowProvider>
      <div className="flex flex-col h-full w-full overflow-hidden">
        <Topbar
          title={workflow.name}
          subTitle="Really long name for workflow test test give it a long name so truncate"
          workflowId={workflow.id}
        />

        <section className="flex h-full overflow-auto">
          <TaskMenu />
          <FlowEditor workflow={workflow} />
        </section>
      </div>
    </ReactFlowProvider>
  );
};

export default Editor;
