import { LabelHTMLAttributes } from "react";
import { createBox, type CombineBoxProps } from "./box";
import cn from "classnames";

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  size?: "md" | "lg" | "sm";
  required?: boolean;
  error?: boolean;
  success?: boolean;
  disabled?: boolean;
}

const LabelBase = createBox<LabelProps>({}, "label");

export const Label = ({
  size = "md",
  required = false,
  error = false,
  success = false,
  disabled = false,
  className,
  ...props
}: CombineBoxProps<LabelProps>) => {
  const classes = cn({
    label: true,
    [`label-${size}`]: true,
    ["label-error"]: error,
    ["label-success"]: success,
    ["label-disabled"]: disabled,
    ["label-required"]: required,
    [className!]: !!className,
  });

  return <LabelBase className={classes} {...props} />;
};

Label.displayName = "Label";
