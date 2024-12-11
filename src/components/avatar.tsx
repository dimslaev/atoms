import { HTMLAttributes, ReactNode, forwardRef } from "react";
import { createBox, type CombineBoxProps } from "./box";
import cn from "classnames";

export interface IntrinsicAvatarProps extends HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg";
  src?: string;
  alt?: string;
  initials?: string;
  icon?: ReactNode;
  square?: boolean;
}
export type AvatarProps = CombineBoxProps<IntrinsicAvatarProps>;
export const AvatarBase = createBox<IntrinsicAvatarProps>({}, "div");
export const Avatar = forwardRef<HTMLElement, AvatarProps>((props, ref) => {
  const { size = "md", src, alt, initials, icon, square = false, className, ...rest } = props;

  const classes = cn({
    avatar: true,
    [`avatar-${size}`]: true,
    ["avatar-square"]: square,
    [className!]: !!className,
  });

  return (
    <AvatarBase ref={ref} className={classes} {...rest}>
      {src ? (
        <img src={src} alt={alt} className="avatar-img" />
      ) : icon ? (
        <span className="avatar-icon">{icon}</span>
      ) : (
        <span className="avatar-initials">{initials}</span>
      )}
    </AvatarBase>
  );
});

Avatar.displayName = "Avatar";
