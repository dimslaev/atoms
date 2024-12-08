import { HTMLAttributes } from "react";
import { createBaseComponent, type CombineBaseProps } from "./base";
import cn from "classnames";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  noBorder?: boolean;
}

const CardBase = createBaseComponent<CardProps>();

export const Card = ({ noBorder = false, className, ...props }: CombineBaseProps<CardProps>) => {
  return (
    <CardBase
      className={cn({
        card: true,
        ["card-no-border"]: noBorder,
        [className!]: !!className,
      })}
      {...props}
    />
  );
};

type CardMediaProps = HTMLAttributes<HTMLDivElement>;

const CardMediaBase = createBaseComponent<CardMediaProps>();

export const CardMedia = ({ className, ...props }: CombineBaseProps<CardMediaProps>) => {
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

type CardContentProps = HTMLAttributes<HTMLDivElement>;

const CardContentBase = createBaseComponent<CardContentProps>();

export const CardContent = ({ className, ...props }: CombineBaseProps<CardContentProps>) => {
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

type CardTitleProps = HTMLAttributes<HTMLDivElement>;

const CardTitleBase = createBaseComponent<CardTitleProps>();

export const CardTitle = ({ className, ...props }: CombineBaseProps<CardTitleProps>) => {
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

type CardActionsProps = HTMLAttributes<HTMLDivElement>;

const CardActionsBase = createBaseComponent<CardActionsProps>();

export const CardActions = ({ className, ...props }: CombineBaseProps<CardActionsProps>) => {
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
