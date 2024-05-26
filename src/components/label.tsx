import { LabelHTMLAttributes } from "react";
import { type HelperProps } from "../lib/types";
import { useHelperClasses } from "../lib/hooks";
import cn from "classnames";

export interface LabelProps
  extends LabelHTMLAttributes<HTMLLabelElement>,
    HelperProps {
  size?: "md" | "lg" | "sm";
  required?: boolean;
  error?: boolean;
  success?: boolean;
}

export const Label = (props: LabelProps) => {
  const { helperClasses, restProps } = useHelperClasses(props);
  const {
    size = "md",
    required = false,
    error = false,
    success = false,
    className,
    ...rest
  } = restProps as Omit<LabelProps, keyof HelperProps>;
  const classes = cn({
    label: true,
    [`label-${size}`]: true,
    ["label-error"]: error,
    ["label-success"]: success,
    ["label-required"]: required,
    [helperClasses]: !!helperClasses,
    [className as string]: !!className,
  });

  return <label className={classes} {...rest} />;
};
