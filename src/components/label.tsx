import { LabelHTMLAttributes } from "react";
import { createBaseComponent, type CombineBaseProps } from "./base";
import cn from "classnames";

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  size?: "md" | "lg" | "sm";
  required?: boolean;
  error?: boolean;
  success?: boolean;
}

const LabelBase = createBaseComponent<LabelProps>({}, "label");

export const Label = ({
  size = "md",
  required = false,
  error = false,
  success = false,
  className,
  ...props
}: CombineBaseProps<LabelProps>) => {
  const classes = cn({
    label: true,
    [`label-${size}`]: true,
    ["label-error"]: error,
    ["label-success"]: success,
    ["label-required"]: required,
    [className!]: !!className,
  });

  return <LabelBase className={classes} {...props} />;
};

Label.displayName = "Label";
