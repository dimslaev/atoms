import { ComponentProps } from "react";
import { Icon as MdiIcon } from "@mdi/react";
import { type HelperProps } from "../lib/types";
import { useHelperClasses } from "../lib/hooks";
import cn from "classnames";

type Size = "sm" | "md" | "lg";

export interface IconProps extends Omit<ComponentProps<typeof MdiIcon>, "size">, HelperProps {
  size?: Size;
}

const sizeMap: { [key in Size]: string } = {
  sm: "1.8rem",
  md: "2.2rem",
  lg: "2.4rem",
};

export const Icon = (props: IconProps) => {
  const { helperClasses, restProps } = useHelperClasses(props);
  const { size = "md", className, ...rest } = restProps as Omit<IconProps, keyof HelperProps>;
  const classes = cn({
    [helperClasses]: !!helperClasses,
    [className as string]: !!className,
  });

  return <MdiIcon size={sizeMap[size]} className={classes} {...rest} />;
};
