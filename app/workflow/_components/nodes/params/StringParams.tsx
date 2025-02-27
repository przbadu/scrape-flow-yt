"use client";

import { Input } from "@/components/ui/input";
import { useId } from "react";
import { Label } from "@/components/ui/label";
import { ParamProps } from "@/types/appNode";
import { useState } from "react";

function StringParams({ params, value, updateNodeParamsValue }: ParamProps) {
  const id = useId();
  const [internalValue, setInternalValue] = useState(value);

  return (
    <div className="space-y-1 p-1 w-full">
      <Label htmlFor={id} className={"text-xs flex"}>
        {params.name}
        {params.required && <span className="text-red-400 px-2">*</span>}
      </Label>
      <Input
        id={id}
        value={internalValue}
        className={"text-xs"}
        placeholder="Enter value here"
        onChange={(e) => setInternalValue(e.target.value)}
        onBlur={(e) => updateNodeParamsValue(e.target.value)}
      />
      {params.helperText && (
        <p className="text-xs text-muted-foreground px-2">
          {params.helperText}
        </p>
      )}
    </div>
  );
}

export default StringParams;
