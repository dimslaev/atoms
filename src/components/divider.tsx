import { HTMLAttributes } from "react";
import { createBaseComponent, type CombineBaseProps } from "./base";
import cn from "classnames";

export interface DividerProps extends HTMLAttributes<HTMLHRElement> {}

const DividerBase = createBaseComponent<DividerProps>({}, "hr");

export const Divider = ({ className, ...props }: CombineBaseProps<DividerProps>) => {
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
