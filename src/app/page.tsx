import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-wrap items-center justify-between p-24">
      <div className="h-16 w-16 border-2 border-gray-600 m-3 bg-background"></div>
      <div className="h-16 w-16 border-2 border-gray-600 m-3 bg-foreground"></div>
      <div className="h-16 w-16 border-2 border-gray-600 m-3 bg-card"></div>
      <div className="h-16 w-16 border-2 border-gray-600 m-3 bg-card-foreground"></div>
      <div className="h-16 w-16 border-2 border-gray-600 m-3 bg-popover"></div>
      <div className="h-16 w-16 border-2 border-gray-600 m-3 bg-popover-foreground"></div>
      <div className="h-16 w-16 border-2 border-gray-600 m-3 bg-primary"></div>
      <div className="h-16 w-16 border-2 border-gray-600 m-3 bg-primary-foreground"></div>
      <div className="h-16 w-16 border-2 border-gray-600 m-3 bg-secondary"></div>
      <div className="h-16 w-16 border-2 border-gray-600 m-3 bg-secondary-foreground"></div>
      <div className="h-16 w-16 border-2 border-gray-600 m-3 bg-muted"></div>
      <div className="h-16 w-16 border-2 border-gray-600 m-3 bg-muted-foreground"></div>
      <div className="h-16 w-16 border-2 border-gray-600 m-3 bg-accent"></div>
      <div className="h-16 w-16 border-2 border-gray-600 m-3 bg-accent-foreground"></div>
      <div className="h-16 w-16 border-2 border-gray-600 m-3 bg-destructive"></div>
      <div className="h-16 w-16 border-2 border-gray-600 m-3 bg-destructive-foreground"></div>
      <div className="h-16 w-16 border-2 border-gray-600 m-3 bg-border"></div>
      <div className="h-16 w-16 border-2 border-gray-600 m-3 bg-input"></div>
      <div className="h-16 w-16 border-2 border-gray-600 m-3 bg-ring"></div>
    </main>
  );
}
