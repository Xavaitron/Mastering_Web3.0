export default function Loading() {
  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-background">
      <div className="space-y-4 text-center">
        <div className="h-12 w-12 animate-spin text-primary" />
        <p className="text-muted-foreground">Loading content...</p>
      </div>
    </div>
  );
}
