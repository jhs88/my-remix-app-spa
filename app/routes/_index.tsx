import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => [
  { title: "New Remix SPA" },
  { name: "description", content: "Welcome to Remix (SPA Mode)!" },
];

export default function Index() {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">Welcome to Remix (SPA Mode)</h2>
      <ul className="mt-4 space-y-2">
        <li>
          <a
            target="_blank"
            href="https://remix.run/future/spa-mode"
            rel="noreferrer"
            className="text-blue-500 hover:underline"
          >
            <h5 className="text-lg">SPA Mode Guide</h5>
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://reactrouter.com"
            rel="noreferrer"
            className="text-blue-500 hover:underline"
          >
            <h5 className="text-lg">React Router Docs</h5>
          </a>
        </li>
      </ul>
    </div>
  );
}
