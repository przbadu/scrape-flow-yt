import { TaskParamsType, TaskType } from "@/types/task";
import { LucideProps, GlobeIcon } from "lucide-react";

export const PageToHtmlTask = {
  type: TaskType.PAGE_TO_HTML,
  label: "Get HTML from page",
  icon: (props: LucideProps) => (
    <GlobeIcon className="stroke-rose-400" {...props} />
  ),
  isEntryPoint: true,
  inputs: [
    {
      name: "Web page",
      type: TaskParamsType.BROWSER_INSTANCE,
      required: true,
    },
  ],
};
