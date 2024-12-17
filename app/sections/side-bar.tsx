import { Link } from "react-router";

export default function SideBar() {
  return (
    <nav style={{ justifyContent: "center" }}>
      <Link to="/">
        <h3>Remix SPA</h3>
        <br />
      </Link>
    </nav>
  );
}
