import { UserButton } from '@clerk/nextjs';
import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

export default async function DashboardPage() {
  const user = await currentUser();

  if (!user) {
    redirect('/sign-in');
  }

  return (
    <div className="min-h-screen p-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
            Dashboard
          </h1>

          <UserButton afterSignOutUrl="/" />
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-200">
            Welcome, {user.firstName ?? 'User'} 👋
          </h2>

          <div className="space-y-2 text-gray-600 dark:text-gray-400">
            <p>
              <strong>Email:</strong> {user.emailAddresses[0]?.emailAddress}
            </p>
            <p>
              <strong>User ID:</strong> {user.id}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
