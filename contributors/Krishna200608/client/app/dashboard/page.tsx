export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <header>
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900">
          Dashboard Overview
        </h2>
        <p className="text-gray-500 mt-2">
          Welcome back! Here's what's happening with your subscriptions.
        </p>
      </header>

      {/* Stats Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* Card 1 */}
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
          <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider">Active Subscriptions</h3>
          <p className="mt-2 text-3xl font-bold text-gray-900">12</p>
        </div>
        
        {/* Card 2 */}
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
          <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider">Monthly Cost</h3>
          <p className="mt-2 text-3xl font-bold text-indigo-600">$249.00</p>
        </div>

        {/* Card 3 */}
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
          <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider">Renewing Soon</h3>
          <p className="mt-2 text-3xl font-bold text-orange-600">3</p>
        </div>
      </div>
      
      {/* Empty State / Placeholder for List */}
      <div className="rounded-xl border border-dashed border-gray-300 bg-gray-50 p-12 text-center">
        <p className="text-gray-500">Subscription list and detailed analytics modules will appear here.</p>
      </div>
    </div>
  );
}