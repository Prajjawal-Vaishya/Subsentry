import EmptyState from "../../components/dashboard/EmptyState";

export default function SubscriptionsPage() {
  return (
    <div className="space-y-6">
      <header>
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900 ">
          Subscriptions
        </h2>
        <p className="text-gray-500 mt-2">
          Manage your recurring payments and active plans.
        </p>
      </header>
      
      <EmptyState 
        title="Module In Development" 
        description="We are currently building the subscription management table. You will soon be able to add, edit, and track your services here."
      />
    </div>
  );
}