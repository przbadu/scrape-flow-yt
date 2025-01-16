import {TaskParamsType, TaskType} from "@/types/task";
import {LucideProps, GlobeIcon} from "lucide-react";

export const LaunchBrowserTask = {
    type: TaskType.LAUNCH_BROWSER,
    label: "Launch Browser",
    icon: (props: LucideProps) => (
        <GlobeIcon className="stroke-pink-400" {...props} />
    ),
    isEntryPoint: true,
    inputs: [
        {
            name: "Website Url",
            type: TaskParamsType.STRING,
            helperText: "e.g. https://www.google.com",
            required: true,
            hideHandle: true,
        }
    ],
};
