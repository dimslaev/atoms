import { HTMLAttributes } from "react";
import { createBox, type CombineBoxProps } from "./box";
import cn from "classnames";

export type IntrinsicDividerProps = HTMLAttributes<HTMLHRElement>;
export type DividerProps = CombineBoxProps<IntrinsicDividerProps>;
export const DividerBase = createBox<IntrinsicDividerProps>({}, "hr");
export const Divider = ({ className, ...props }: DividerProps) => {
  return (
    <DividerBase
      className={cn({
        divider: true,
        [className!]: !!className,
      })}
      {...props}
    />
  );
};
