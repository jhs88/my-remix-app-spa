import SideBar from "./side-bar";

export default function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <>
      <div>
        <div>
          <SideBar />
        </div>
        <div style={{ justifyContent: "center", alignItems: "center" }}>
          {children}
        </div>
      </div>
    </>
  );
}
