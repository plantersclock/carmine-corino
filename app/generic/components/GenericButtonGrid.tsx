import React from "react";

interface GenericButtonGridProps {
  children: React.ReactNode;
  className?: string;
}

const GenericButtonGrid = ({ children, className }: GenericButtonGridProps) => {
  return <div className={`grid gap-y-6 ${className ?? ""}`}>{children}</div>;
};

export default GenericButtonGrid;
