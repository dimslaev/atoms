import { ComponentProps } from "react";
import { Icon as MdiIcon } from "@mdi/react";

type Size = "sm" | "md" | "lg";

export interface IconProps extends Omit<ComponentProps<typeof MdiIcon>, "size"> {
  size?: Size;
}

const sizeMap: { [key in Size]: string } = {
  sm: "1.8rem",
  md: "2.2rem",
  lg: "2.4rem",
};

export const Icon = (props: IconProps) => {
  const { size = "md", ...rest } = props;
  return <MdiIcon size={sizeMap[size]} {...rest} />;
};
