import { HTMLAttributes } from "react";
import { createBox, type CombineBoxProps } from "./box";
import cn from "classnames";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  noBorder?: boolean;
}

const CardBase = createBox<CardProps>();

export const Card = ({ noBorder = false, className, ...props }: CombineBoxProps<CardProps>) => {
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

const CardMediaBase = createBox<CardMediaProps>();

export const CardMedia = ({ className, ...props }: CombineBoxProps<CardMediaProps>) => {
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

const CardContentBase = createBox<CardContentProps>();

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

type CardTitleProps = HTMLAttributes<HTMLDivElement>;

const CardTitleBase = createBox<CardTitleProps>();

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

type CardActionsProps = HTMLAttributes<HTMLDivElement>;

const CardActionsBase = createBox<CardActionsProps>();

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
