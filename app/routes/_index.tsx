import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => [
  { title: "New Remix SPA" },
  { name: "description", content: "Welcome to Remix (SPA Mode)!" },
];

export default function Index() {
  return (
    <div>
      <h2>Welcome to Remix (SPA Mode)</h2>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://remix.run/future/spa-mode"
            rel="noreferrer"
          >
            <h5>SPA Mode Guide</h5>
          </a>
        </li>
        <li>
          <a target="_blank" href="https://reactrouter.com" rel="noreferrer">
            <h5>React Router Docs</h5>
          </a>
        </li>
      </ul>
    </div>
  );
}
