import { CSSProperties } from "react";

export const Container = ({
  title,
  children,
  style,
  rowStyle,
}: {
  title?: string;
  children: React.ReactNode;
  style?: CSSProperties;
  rowStyle?: CSSProperties;
}) => (
  <div
    style={{
      padding: "2rem",
    }}
  >
    {title && (
      <h4
        style={{
          marginBottom: "1rem",
          fontWeight: 400,
          fontSize: "1.2rem",
          letterSpacing: "0.05rem",
          color: "var(--gray-500)",
          width: "100%",
          ...style,
        }}
      >
        {title}
      </h4>
    )}
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "2rem",
        flexWrap: "wrap",
        ...rowStyle,
      }}
    >
      {children}
    </div>
  </div>
);

// @ts-expect-error no-explicit-any
export const getRowTitle = (row) => {
  return Object.keys(row[0])
    .map((k) => {
      if (k !== "children") {
        let v = row[0][k];
        if (typeof v === "object") {
          v = "object";
        }
        if (k === "size") {
          // @ts-expect-error no-explicit-any
          v = row.map((c) => c.size).join(",");
        }

        return `${k}: ${v}`;
      }
    })
    .filter(Boolean)
    .join(" | ");
};
