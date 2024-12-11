import { HTMLAttributes } from "react";
import { createBox, type CombineBoxProps } from "./box";
import cn from "classnames";

export interface IntrinsicTextProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "small";
}
export type TextProps = CombineBoxProps<IntrinsicTextProps>;
export const TextBase = createBox<IntrinsicTextProps>({}, "span");
export const Text = (props: TextProps) => {
  const { className, variant = "p", as, ...rest } = props;

  const classes = cn({
    text: true,
    [`text-${variant}`]: !!variant,
    [className!]: !!className,
  });

  return <TextBase as={as || variant} className={classes} {...rest} />;
};
