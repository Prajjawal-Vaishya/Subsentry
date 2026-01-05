import Link from 'next/link';

const navItems = [
  { label: 'Dashboard', href: '/dashboard' },
  { label: 'Subscriptions', href: '/subscriptions' },
  { label: 'Renewals', href: '/renewals' },
  { label: 'Analytics', href: '/analytics' },
];

const accountItems = [
  { label: 'Settings', href: '/settings' },
  { label: 'Profile', href: '/profile' },
];

export default function Sidebar({ activePage }: { activePage: string }) {
  const getActiveClass = (page: string) => {
    if (page === activePage) {
      return 'bg-[#3B82F6]/20 text-[#3B82F6] hover:bg-[#3B82F6]/30';
    }

    return 'text-[#FFFFFF] hover:bg-[#222222]';
  };

  return (
    <aside className="w-64 bg-[#111111] border-r border-[#222222]">
      <div className="p-6">
        <div className="flex items-center gap-3 mb-8">
          <img
            src="/logo.png"
            alt="SubSentry logo"
            className="w-8 h-8 rounded-lg object-cover"
          />
          <span className="text-xl font-semibold text-[#FFFFFF]">SubSentry</span>
        </div>

        <nav className="space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${getActiveClass(
                item.label
              )}`}
            >
              <span className="font-medium">{item.label}</span>
            </Link>
          ))}

          <div className="border-t border-[#222222] my-4"></div>

          <div className="px-3 py-2 text-sm font-medium text-[#999999] uppercase tracking-wider">
            Account
          </div>

          {accountItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${getActiveClass(
                item.label
              )}`}
            >
              <span className="font-medium">{item.label}</span>
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  );
}
