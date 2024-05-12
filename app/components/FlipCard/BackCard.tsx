import { Grid, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import React from "react";

/** Renders the back card component. */
export default function BackCard(props: { children?: React.ReactNode }) {
  return (
    <Stack ml="1rem" mt="1rem">
      <Typography variant="h5">
        {/* {t("backHeader", { content: { ...props } })} */}
        Test
      </Typography>
      <Typography variant="subtitle1">
        {/* {t("subHeader", { ...props })} */}
        Test
      </Typography>
      {/* {parse(description ?? "", options)} */}
      Test2
      {props.children &&
        React.Children.map(props.children, (child) => (
          <Grid item>{child}</Grid>
        ))}
    </Stack>
  );
}
