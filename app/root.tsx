import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { getMuiLinks, MuiDocument, MuiMeta } from "~/mui";

export const links: LinksFunction = () => [...getMuiLinks()];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <MuiMeta />
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
  return (
    <MuiDocument>
      <Outlet />
    </MuiDocument>
  );
}

export function HydrateFallback() {
  return <MuiDocument><p>Loading...</p></MuiDocument>;
}
