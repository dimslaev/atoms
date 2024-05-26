import { HTMLAttributes } from "react";
import { type HelperProps } from "../lib/types";
import { useHelperClasses } from "../lib/hooks";
import cn from "classnames";

export interface CardProps extends HTMLAttributes<HTMLDivElement>, HelperProps {
  noBorder?: boolean;
}

export const Card = (props: CardProps) => {
  const { helperClasses, restProps } = useHelperClasses(props);
  const {
    className,
    noBorder = false,
    ...rest
  } = restProps as Omit<CardProps, keyof HelperProps>;
  const classes = cn({
    card: true,
    ["card-no-border"]: noBorder,
    [helperClasses]: !!helperClasses,
    [className as string]: !!className,
  });

  return <div className={classes} {...rest} />;
};

export interface CardMediaProps extends HTMLAttributes<HTMLDivElement> {}

export const CardMedia = (props: CardMediaProps) => {
  const { className, ...rest } = props;
  const classes = cn({
    "card-media": true,
    [className as string]: !!className,
  });

  return <div className={classes} {...rest} />;
};

export interface CardContentProps extends HTMLAttributes<HTMLDivElement> {}

export const CardContent = (props: CardContentProps) => {
  const { className, ...rest } = props;
  const classes = cn({
    "card-content": true,
    [className as string]: !!className,
  });

  return <div className={classes} {...rest} />;
};

export interface CardTitleProps extends HTMLAttributes<HTMLDivElement> {}

export const CardTitle = (props: CardTitleProps) => {
  const { className, ...rest } = props;
  const classes = cn({
    "card-title": true,
    [className as string]: !!className,
  });

  return <div className={classes} {...rest} />;
};

export interface CardActionsProps extends HTMLAttributes<HTMLDivElement> {}

export const CardActions = (props: CardActionsProps) => {
  const { className, ...rest } = props;
  const classes = cn({
    "card-actions": true,
    [className as string]: !!className,
  });

  return <div className={classes} {...rest} />;
};
