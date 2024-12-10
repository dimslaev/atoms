import { HTMLAttributes } from "react";
import { createBox, type CombineBoxProps } from "./box";
import cn from "classnames";

export type DividerProps = HTMLAttributes<HTMLHRElement>;

const DividerBase = createBox<DividerProps>({}, "hr");

export const Divider = ({ className, ...props }: CombineBoxProps<DividerProps>) => {
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
