import { Box, BoxProps } from "../../src/components/box";
import { Container } from "../components/story-container";

const marginRows: BoxProps[][] = [
  [
    {
      children: "mt-4",
      mt: "4",
    },
    {
      children: "mb-4",
      mb: "4",
    },
    {
      display: "block",
      children: "ml-4",
      ml: "4",
    },
    {
      display: "block",
      children: "mr-4",
      mr: "4",
    },
    {
      display: "block",
      children: "my-4",
      my: "4",
    },
    {
      display: "block",
      children: "mx-4",
      mx: "4",
    },
  ],
];

const paddingRows: BoxProps[][] = [
  [
    {
      children: "pt-4",
      pt: "4",
    },
    {
      children: "pb-4",
      pb: "4",
    },
    {
      children: "pl-4",
      pl: "4",
    },
    {
      children: "pr-4",
      pr: "4",
    },
    {
      children: "py-4",
      py: "4",
    },
    {
      children: "px-4",
      px: "4",
    },
  ],
];

const horizontalMarginAutoRows: BoxProps[][] = [
  [
    {
      display: "block",
      children: "ml-auto",
      ml: "auto",
    },
    {
      display: "block",
      children: "mr-auto",
      mr: "auto",
    },
    {
      display: "block",
      children: "mx-auto",
      mx: "auto",
    },
  ],
];

const verticalMarginAutoRows: BoxProps[][] = [
  [
    {
      children: "mt-auto",
      mt: "auto",
    },
    {
      children: "mb-auto",
      mb: "auto",
    },
    {
      children: "my-auto",
      my: "auto",
    },
  ],
];

export function Default() {
  const margins = marginRows.map((row, index) => (
    <Container
      key={`margin-${index}`}
      title="margin"
      rowStyle={{ background: "var(--primary-subdued)", padding: "1rem 2rem" }}
    >
      {row.map((col, colIndex) => (
        <div
          key={`margin-${index}-${colIndex}`}
          style={{
            background:
              "repeating-linear-gradient(45deg, transparent,var(--on-primary) 4px,var(--blue-800) 4px,var(--blue-800) 8px)",
          }}
        >
          <Box
            {...col}
            style={{
              background: "var(--primary)",
              color: "var(--on-primary)",
              padding: "0.4rem",
            }}
          />
        </div>
      ))}
    </Container>
  ));
  const horizontalMarginAutos = horizontalMarginAutoRows.map((row, index) => (
    <Container
      key={`margin-auto-horizontal-${index}`}
      title="margin auto horizontal"
      rowStyle={{
        background: "var(--primary-subdued)",
        padding: "1rem 2rem",
      }}
    >
      {row.map((col, colIndex) => (
        <div
          key={`margin-auto-horizontal-${index}-${colIndex}`}
          style={{
            background:
              "repeating-linear-gradient(45deg, transparent,var(--on-primary) 4px,var(--blue-800) 4px,var(--blue-800) 8px)",
            flex: 1,
            display: "flex",
          }}
        >
          <Box
            {...col}
            style={{
              background: "var(--primary)",
              color: "var(--on-primary)",
              padding: "0.4rem",
            }}
          />
        </div>
      ))}
    </Container>
  ));
  const verticalMarginAutos = verticalMarginAutoRows.map((row, index) => (
    <Container
      key={`margin-auto-vertical-${index}`}
      title="margin auto vertical"
      rowStyle={{
        background: "var(--primary-subdued)",
        padding: "1rem 2rem",
        height: "200px",
      }}
    >
      {row.map((col, colIndex) => (
        <div
          key={`margin-auto-vertical-${index}-${colIndex}`}
          style={{
            background:
              "repeating-linear-gradient(45deg, transparent,var(--on-primary) 4px,var(--blue-800) 4px,var(--blue-800) 8px)",

            display: "flex",
            height: "100%",
          }}
        >
          <Box
            {...col}
            style={{
              background: "var(--primary)",
              color: "var(--on-primary)",
              padding: "0.4rem",
            }}
          />
        </div>
      ))}
    </Container>
  ));
  const paddings = paddingRows.map((row, index) => (
    <Container
      key={`padding-${index}`}
      title="padding"
      rowStyle={{ background: "var(--primary-subdued)", padding: "1rem 2rem" }}
    >
      {row.map(({ children, ...col }, colIndex) => (
        <div
          key={`padding-${index}-${colIndex}`}
          style={{
            background:
              "repeating-linear-gradient(45deg, transparent,var(--on-primary) 4px,var(--primary) 4px,var(--primary) 8px)",
          }}
        >
          <Box
            {...col}
            style={{
              // background: "var(--primary)",
              color: "var(--on-primary)",
            }}
          >
            <Box
              style={{
                background: "var(--primary)",
                color: "var(--on-primary)",
                padding: "0.4rem",
              }}
            >
              {children}
            </Box>
          </Box>
        </div>
      ))}
    </Container>
  ));
  const horizontalGap = (
    <Container
      title="horizontal gap"
      rowStyle={{ background: "var(--primary-subdued)", padding: "1rem 2rem" }}
    >
      <Box
        display="flex"
        gap="4"
        style={{
          background:
            "repeating-linear-gradient(45deg, transparent,var(--on-primary) 4px,var(--blue-800) 4px,var(--blue-800) 8px)",
        }}
      >
        {[1, 2, 3, 4].map((index) => (
          <Box
            key={`hor-gap-${index}`}
            style={{
              background: "var(--primary)",
              color: "var(--on-primary)",
              padding: "0.4rem",
            }}
          >
            Box
          </Box>
        ))}
      </Box>
    </Container>
  );
  const verticalGap = (
    <Container
      title="vertical gap"
      rowStyle={{ background: "var(--primary-subdued)", padding: "1rem 2rem" }}
    >
      <Box
        display="flex"
        flex="col"
        gap="4"
        style={{
          background:
            "repeating-linear-gradient(45deg, transparent,var(--on-primary) 4px,var(--blue-800) 4px,var(--blue-800) 8px)",
        }}
      >
        {[1, 2, 3, 4].map((index) => (
          <Box
            key={`ver-gap-${index}`}
            style={{
              background: "var(--primary)",
              color: "var(--on-primary)",
              padding: "0.4rem",
            }}
          >
            Box
          </Box>
        ))}
      </Box>
    </Container>
  );
  const horizontalAlign = (
    <Container
      title="horizontal align"
      rowStyle={{
        background: "var(--primary-subdued)",
        padding: "1rem 2rem",
        display: "block",
      }}
    >
      <Box display="flex" items="center" gap="4">
        <Box
          style={{
            background: "var(--primary)",
            color: "var(--on-primary)",
            padding: "0 0.4rem",
          }}
        >
          Box
        </Box>
        <Box
          style={{
            background: "var(--primary)",
            color: "var(--on-primary)",
            padding: "0.4rem",
          }}
        >
          Box
        </Box>
      </Box>
    </Container>
  );
  const horizontalJustify = (
    <Container
      title="horizontal justify"
      rowStyle={{
        background: "var(--primary-subdued)",
        padding: "1rem 2rem",
        display: "block",
      }}
    >
      <Box display="flex" justify="center" gap="4">
        <Box
          style={{
            background: "var(--primary)",
            color: "var(--on-primary)",
            padding: "0.4rem",
          }}
        >
          Box
        </Box>
        <Box
          style={{
            background: "var(--primary)",
            color: "var(--on-primary)",
            padding: "0.4rem",
          }}
        >
          Box
        </Box>
      </Box>
    </Container>
  );
  const verticalAlign = (
    <Container
      title="vertical align"
      rowStyle={{
        background: "var(--primary-subdued)",
        padding: "1rem 2rem",
        display: "block",
      }}
    >
      <Box display="flex" flex="col" items="center" gap="4">
        <Box
          style={{
            background: "var(--primary)",
            color: "var(--on-primary)",
            padding: "0.4rem",
          }}
        >
          Box
        </Box>
        <Box
          style={{
            background: "var(--primary)",
            color: "var(--on-primary)",
            padding: "0.4rem",
          }}
        >
          Box
        </Box>
      </Box>
    </Container>
  );
  const verticalJustify = (
    <Container
      title="vertical justify"
      rowStyle={{
        background: "var(--primary-subdued)",
        padding: "1rem 2rem",
        height: "20rem",
        display: "block",
      }}
    >
      <Box display="flex" flex="col" justify="center" gap="4" style={{ height: "100%" }}>
        <Box
          style={{
            background: "var(--primary)",
            color: "var(--on-primary)",
            padding: "0.4rem",
          }}
        >
          Box
        </Box>
        <Box
          style={{
            background: "var(--primary)",
            color: "var(--on-primary)",
            padding: "0.4rem",
          }}
        >
          Box
        </Box>
      </Box>
    </Container>
  );

  return (
    <>
      {margins}
      {horizontalMarginAutos}
      {verticalMarginAutos}
      {paddings}
      {horizontalGap}
      {verticalGap}
      {horizontalAlign}
      {horizontalJustify}
      {verticalAlign}
      {verticalJustify}
    </>
  );
}