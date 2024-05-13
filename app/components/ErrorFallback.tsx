import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { isRouteErrorResponse } from "@remix-run/react";

import type { ErrorResponse } from "@remix-run/react";

type ErrorFallbackProps = {
  error: ErrorResponse | Error | unknown;
};

export default function ErrorFallback({ error }: ErrorFallbackProps) {
  return (
    <Box className="error-page">
      <Stack alignItems="center" justifyContent="center" spacing={2}>
        <Typography variant="h1">
          {isRouteErrorResponse(error) ? error.status : 500}
        </Typography>
        <Typography>
          {isRouteErrorResponse(error)
            ? error.data.message ?? error.data
            : error instanceof Error
              ? error.message
              : "An Unknown error ocurred"}
        </Typography>
      </Stack>
    </Box>
  );
}
