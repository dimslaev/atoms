import { useMemo } from "react";
import { type SpacePrefix, type HelperProps } from "./types";
import { getHelperClasses, spaceKeys } from "./utils";

export function useHelperClasses<T = unknown>(props: HelperProps & T) {
  const {
    display,
    flex,
    items,
    justify,
    gap,
    m,
    mt,
    mb,
    ml,
    mr,
    mx,
    my,
    p,
    pt,
    pb,
    pl,
    pr,
    px,
    py,
    ...restProps
  } = props;

  const helperClasses = useMemo(() => {
    const result = [];

    if (display) {
      result.push(...getHelperClasses(null, display));
      if (display === "flex") {
        if (flex) {
          result.push(...getHelperClasses("flex", flex));
        }
        if (items) {
          result.push(...getHelperClasses("items", items));
        }
        if (justify) {
          result.push(...getHelperClasses("justify", justify));
        }
        if (gap) {
          result.push(...getHelperClasses("gap", gap));
        }
      }
    }

    spaceKeys.forEach((key) => {
      const value = props[key as SpacePrefix];
      if (value) {
        result.push(...getHelperClasses(key as SpacePrefix, value));
      }
    });

    return result.join(" ");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [display, flex, items, justify, gap, m, mt, mb, ml, mr, mx, my, p, pt, pb, pl, pr, px, py]);

  return {
    helperClasses,
    restProps,
  };
}
