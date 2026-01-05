import EmptyState from "../../components/dashboard/EmptyState";

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <header>
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900">
          Analytics & Insights
        </h2>
        <p className="text-gray-500 mt-2 ">
          Visualize your spending habits and cost projections.
        </p>
      </header>
      
      <EmptyState 
        title="Charts Incoming" 
        description="Our data visualization engine is being calibrated. Check back later for detailed cost breakdowns and usage graphs."
      />
    </div>
  );
}