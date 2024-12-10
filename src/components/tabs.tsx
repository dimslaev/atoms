import { HTMLAttributes, ReactNode } from "react";
import { createBox, type CombineBoxProps } from "./box";
import cn from "classnames";

export interface TabsProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const TabsBase = createBox<TabsProps>();

export const Tabs = ({ className, ...props }: CombineBoxProps<TabsProps>) => {
  return (
    <TabsBase
      className={cn({
        tabs: true,
        [className!]: !!className,
      })}
      {...props}
    />
  );
};

interface TabProps extends HTMLAttributes<HTMLButtonElement> {
  size?: "md" | "lg" | "sm";
  active?: boolean;
  disabled?: boolean;
  iconOnly?: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
}

const TabBase = createBox<TabProps>({}, "button");

export const Tab = ({
  size = "md",
  active = false,
  disabled = false,
  iconOnly = false,
  startIcon,
  endIcon,
  children,
  className,
  ...props
}: CombineBoxProps<TabProps>) => {
  return (
    <TabBase
      className={cn({
        tab: true,
        [`tab-${size}`]: true,
        ["tab-active"]: active,
        ["tab-disabled"]: disabled,
        ["tab-icon"]: iconOnly,
        ["tab-w-start"]: startIcon,
        ["tab-w-end"]: endIcon,
        [className!]: !!className,
      })}
      {...props}
    >
      {startIcon}
      <div className="tab-label">{children}</div>
      {endIcon}
    </TabBase>
  );
};
