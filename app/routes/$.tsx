import { type ClientLoaderFunctionArgs, useRouteError } from "react-router";
import ErrorFallback from "~/components/ErrorFallback";

export async function clientLoader({ request }: ClientLoaderFunctionArgs) {
  throw new Response(`${new URL(request.url).pathname} Not Found`, {
    status: 404,
  });
}

export default function CatchAllPage() {
  return null;
}

export function ErrorBoundary() {
  const error = useRouteError();
  return <ErrorFallback {...{ error }} />;
}
