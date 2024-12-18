import { HTMLAttributes } from "react";
import { createBox, type CombineBoxProps } from "./box";
import cn from "classnames";

export interface IntrinsicCardProps extends HTMLAttributes<HTMLDivElement> {
  border?: boolean;
}
export type CardProps = CombineBoxProps<IntrinsicCardProps>;
export const CardBase = createBox<IntrinsicCardProps>();
export const Card = ({ border = false, className, ...props }: CombineBoxProps<CardProps>) => {
  return (
    <CardBase
      className={cn({
        card: true,
        ["card-border"]: border,
        [className!]: !!className,
      })}
      {...props}
    />
  );
};

export type IntrinsicCardMediaProps = HTMLAttributes<HTMLDivElement>;
export type CardMediaProps = CombineBoxProps<IntrinsicCardMediaProps>;
export const CardMediaBase = createBox<IntrinsicCardMediaProps>();
export const CardMedia = ({ className, ...props }: CardMediaProps) => {
  return (
    <CardMediaBase
      className={cn({
        "card-media": true,
        [className!]: !!className,
      })}
      {...props}
    />
  );
};

export type IntrinsicCardContentProps = HTMLAttributes<HTMLDivElement>;
export type CardContentProps = CombineBoxProps<IntrinsicCardContentProps>;
export const CardContentBase = createBox<IntrinsicCardContentProps>();
export const CardContent = ({ className, ...props }: CombineBoxProps<CardContentProps>) => {
  return (
    <CardContentBase
      className={cn({
        "card-content": true,
        [className!]: !!className,
      })}
      {...props}
    />
  );
};

export type IntrinsicCardTitleProps = HTMLAttributes<HTMLDivElement>;
export type CardTitleProps = CombineBoxProps<IntrinsicCardTitleProps>;
export const CardTitleBase = createBox<IntrinsicCardTitleProps>();
export const CardTitle = ({ className, ...props }: CombineBoxProps<CardTitleProps>) => {
  return (
    <CardTitleBase
      className={cn({
        "card-title": true,
        [className!]: !!className,
      })}
      {...props}
    />
  );
};

export type IntrinsicCardActionsProps = HTMLAttributes<HTMLDivElement>;
export type CardActionsProps = CombineBoxProps<IntrinsicCardActionsProps>;
export const CardActionsBase = createBox<IntrinsicCardActionsProps>();
export const CardActions = ({ className, ...props }: CombineBoxProps<CardActionsProps>) => {
  return (
    <CardActionsBase
      className={cn({
        "card-actions": true,
        [className!]: !!className,
      })}
      {...props}
    />
  );
};
