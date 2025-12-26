import { UserButton } from "@clerk/nextjs";

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24 bg-zinc-50 dark:bg-black">
      <div className="flex flex-col items-center gap-8">
        <h1 className="text-4xl font-bold text-black dark:text-zinc-50">Dashboard</h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400">
          Welcome to your SubSentry dashboard! You are successfully authenticated.
        </p>
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
}
