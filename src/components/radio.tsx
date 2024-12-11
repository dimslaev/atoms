import { InputHTMLAttributes, forwardRef } from "react";
import { createBox, type CombineBoxProps } from "./box";
import cn from "classnames";
import { Label } from "./label";

export interface IntrinsicRadioProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "type"> {
  label?: string;
  size?: "md" | "lg" | "sm";
  error?: boolean;
  success?: boolean;
  disabled?: boolean;
}
export type RadioProps = CombineBoxProps<IntrinsicRadioProps>;
export const RadioBase = createBox<IntrinsicRadioProps>({}, "div");
export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  (
    {
      size = "md",
      error = false,
      success = false,
      disabled = false,
      id = "",
      label = "",
      className,
      ...props
    },
    ref
  ) => {
    const classes = cn({
      radio: true,
      [`radio-${size}`]: true,
      ["radio-error"]: error,
      ["radio-success"]: success,
      ["radio-disabled"]: disabled,
      [className!]: !!className,
    });

    return (
      <RadioBase className={classes}>
        <input ref={ref} id={id} type="radio" disabled={disabled} {...props} />
        {label && (
          <Label htmlFor={id} size={size} error={error} success={success} disabled={disabled}>
            {label}
          </Label>
        )}
      </RadioBase>
    );
  }
);

Radio.displayName = "Radio";
