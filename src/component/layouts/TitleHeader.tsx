import { Stack, Typography } from "@mui/material";
import type { ReactNode } from "react";

export interface TitleHeaderProps {
  title: string;
  additionalComponent?: ReactNode;
}

export const TitleHeader = ({
  title,
  additionalComponent,
}: TitleHeaderProps) => {
  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      sx={{
        mt: 3,
        justifyContent: "space-between",
        alignItems: { sm: "center" },
      }}
    >
      <Typography variant="h1">{title}</Typography>
      <Stack>{additionalComponent}</Stack>
    </Stack>
  );
};
