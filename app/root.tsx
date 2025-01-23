import type { LinksFunction } from "react-router";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useMatches,
} from "react-router";
import { PopupLoader } from "~/components/loading";
import Content from "~/sections/layout";

import type { Route } from "./+types/root"; 

import styles from "~/tailwind.css?url";

type SerializeFrom<T> = ReturnType<typeof useLoaderData<T>>;

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

export const useRootLoaderData = () => {
  const [root] = useMatches();
  return root?.data as SerializeFrom<typeof clientLoader>;
};

export async function clientLoader({ request }: Route.ClientLoaderArgs) {
  const url = new URL(request.url);
  return { url };
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  const data = useLoaderData<typeof clientLoader>();

  return (
    <Content {...data}>
      <Outlet />
    </Content>
  );
}

export function HydrateFallback() {
  const data = useRootLoaderData();

  return (
    <Content {...data}>
      <PopupLoader />
    </Content>
  );
}
