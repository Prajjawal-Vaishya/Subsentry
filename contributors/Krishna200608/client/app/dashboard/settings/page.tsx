import EmptyState from "../../components/dashboard/EmptyState";

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <header>
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900 ">
          Account Settings
        </h2>
        <p className="text-gray-500 mt-2">
          Update your profile preferences and notification settings.
        </p>
      </header>
      
      <EmptyState 
        title="Configuration Pending" 
        description="User preference modules are queued for implementation. This section will allow you to customize your dashboard experience."
      />
    </div>
  );
}