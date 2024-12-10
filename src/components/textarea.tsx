import { TextareaHTMLAttributes, ReactNode, forwardRef } from "react";
import { createBox, type CombineBoxProps } from "./box";
import cn from "classnames";

export interface TextareaProps extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "size"> {
  size?: "md" | "lg" | "sm";
  error?: boolean;
  success?: boolean;
  disabled?: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
}

const TextareaWrapper = createBox<TextareaProps>({}, "div");

export const Textarea = forwardRef<HTMLTextAreaElement, CombineBoxProps<TextareaProps>>(
  (
    {
      size = "md",
      error = false,
      success = false,
      disabled = false,
      startIcon,
      endIcon,
      className,
      ...props
    },
    ref
  ) => {
    const classes = cn({
      textarea: true,
      [`textarea-${size}`]: true,
      ["textarea-error"]: error,
      ["textarea-success"]: success,
      ["textarea-disabled"]: disabled,
      ["textarea-w-start"]: startIcon,
      ["textarea-w-end"]: endIcon,
      [className!]: !!className,
    });

    return (
      <TextareaWrapper className={classes}>
        {startIcon}
        <textarea ref={ref} disabled={disabled} {...props} />
        {endIcon}
      </TextareaWrapper>
    );
  }
);

Textarea.displayName = "Textarea";
