import React from "react";

type SpacerProps = {
  /** Tailwind height class or arbitrary value like 'h-[900px]' */
  height?: string;
  className?: string;
};

export default function Spacer({
  height = "h-[900px]",
  className = "",
}: SpacerProps) {
  return <div className={`${height} ${className}`} aria-hidden="true" />;
}
