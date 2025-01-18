import { Loader2Icon } from "lucide-react";
import React from "react";

const loading = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <Loader2Icon className="animate-spin" size={30} />
    </div>
  );
};

export default loading;
