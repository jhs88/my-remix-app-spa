/** Renders a loading component with a specified limit of skeleton cards. */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function Loading({ limit }: { limit?: number }) {
  return PopupLoader();
}

/** Renders a popup loader component. */
export function PopupLoader() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <div className="grid auto-rows-min gap-4 md:grid-cols-3">
        <div className="aspect-video rounded-xl bg-muted/50" />
        <div className="aspect-video rounded-xl bg-muted/50" />
        <div className="aspect-video rounded-xl bg-muted/50" />
      </div>
      <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
    </div>
  );
}
