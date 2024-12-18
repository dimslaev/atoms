import { HTMLAttributes } from "react";

export interface AspectRatioProps extends HTMLAttributes<HTMLDivElement> {
  ratio: number;
}

export const AspectRatio = ({ ratio, children }: AspectRatioProps) => {
  return (
    <div className="aspect-ratio" style={{ paddingTop: `${(1 / ratio) * 100}%` }}>
      <div className="aspect-ratio-content">{children}</div>
    </div>
  );
};

AspectRatio.displayName = "AspectRatio";
