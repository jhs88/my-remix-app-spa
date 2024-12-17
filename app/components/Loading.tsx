/** Renders a loading component with a specified limit of skeleton cards. */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function Loading({ limit }: { limit?: number }) {
  return PopupLoader();
}

/** Renders a popup loader component. */
export function PopupLoader() {
  return (
    <div>
      <h3>Loading...</h3>
      <i>This will take a couple seconds</i>
    </div>
  );
}
