import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const summaryCards = [
  {
    label: 'Monthly Spend',
    value: '$284.50',
    hint: '+12% from last month',
    accent: 'text-[#3B82F6]',
    accentBg: 'bg-[#3B82F6]/20',
    icon: '💰',
  },
  {
    label: 'Active Subscriptions',
    value: '12',
    hint: 'All active',
    accent: 'text-[#22C55E]',
    accentBg: 'bg-[#22C55E]/20',
    icon: '✓',
  },
  {
    label: 'Upcoming Renewals',
    value: '3',
    hint: 'Next 7 days',
    accent: 'text-[#F59E0B]',
    accentBg: 'bg-[#F59E0B]/20',
    icon: '📅',
  },
  {
    label: 'Free Trials',
    value: '2',
    hint: 'Ending soon',
    accent: 'text-[#999999]',
    accentBg: 'bg-[#64748B]/20',
    icon: '⏱',
  },
];

const recentSubscriptions = [
  {
    name: 'Streaming Plus',
    category: 'Entertainment',
    amount: '$15.99',
    cycle: 'Monthly',
    status: 'Active',
    statusClass: 'text-[#22C55E]',
    renewal: 'Renews Dec 15',
  },
  {
    name: 'Music Cloud',
    category: 'Music',
    amount: '$9.99',
    cycle: 'Monthly',
    status: 'Active',
    statusClass: 'text-[#22C55E]',
    renewal: 'Renews Dec 10',
  },
  {
    name: 'Creative Suite',
    category: 'Productivity',
    amount: '$52.99',
    cycle: 'Monthly',
    status: 'Active',
    statusClass: 'text-[#22C55E]',
    renewal: 'Renews Dec 20',
  },
  {
    name: 'Team Workspace',
    category: 'Development',
    amount: '$4.00',
    cycle: 'Monthly',
    status: 'Active',
    statusClass: 'text-[#22C55E]',
    renewal: 'Renews Jan 5',
  },
  {
    name: 'AI Assistant',
    category: 'AI Tools',
    amount: '$20.00',
    cycle: 'Monthly',
    status: 'Trial',
    statusClass: 'text-[#F59E0B]',
    renewal: 'Ends Dec 12',
  },
];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#000000] flex">
      <Sidebar activePage="Dashboard" />

      <div className="flex-1">
        <Header title="Dashboard" />

        <main className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {summaryCards.map((card) => (
              <div key={card.label} className="bg-[#111111] p-6 rounded-xl">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[#999999] text-sm font-medium">
                    {card.label}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center ${card.accentBg}`}
                  >
                    <span className={`${card.accent} text-sm`}>{card.icon}</span>
                  </div>
                </div>
                <div className="text-2xl font-bold text-[#FFFFFF]">
                  {card.value}
                </div>
                <div className="text-xs text-[#999999] mt-1">{card.hint}</div>
              </div>
            ))}
          </div>

          <div className="bg-[#111111] rounded-xl p-6">
            <h2 className="text-lg font-semibold text-[#FFFFFF] mb-4">
              Recent Subscriptions
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {recentSubscriptions.map((item) => (
                <div key={item.name} className="p-4 bg-[#000000] rounded-lg">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-[#222222] flex items-center justify-center text-sm font-semibold text-[#FFFFFF]">
                      {item.name
                        .split(' ')
                        .map((word) => word[0])
                        .slice(0, 2)
                        .join('')}
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-[#FFFFFF]">
                        {item.name}
                      </div>
                      <div className="text-sm text-[#999999] mb-2">
                        {item.category}
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-semibold text-[#FFFFFF]">
                            {item.amount}
                          </div>
                          <div className="text-sm text-[#999999]">
                            {item.cycle}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className={`text-sm ${item.statusClass}`}>
                            {item.status}
                          </div>
                          <div className="text-xs text-[#999999]">
                            {item.renewal}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
