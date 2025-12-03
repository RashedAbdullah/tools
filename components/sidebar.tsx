import { Home, Clock, Folder, BarChart3, User, Settings } from "lucide-react";

export function Sidebar() {
  const menuItems = [
    { icon: Home, label: "ড্যাশবোর্ড", href: "/dashboard" },
    { icon: Clock, label: "কাজের সেশন", href: "/sessions" },
    { icon: Folder, label: "প্রকল্প", href: "/projects" },
    { icon: BarChart3, label: "রিপোর্ট", href: "/reports" },
    { icon: User, label: "প্রোফাইল", href: "/profile" },
    { icon: Settings, label: "সেটিংস", href: "/settings" },
  ];

  return (
    <aside className="w-64 bg-gray-900 text-white min-h-screen p-4">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-center">কাজের ট্র্যাকার</h1>
        <p className="text-gray-400 text-sm text-center">Work Time Tracker</p>
      </div>

      <nav className="space-y-2">
        {menuItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 transition-colors"
          >
            <item.icon className="w-5 h-5" />
            <span>{item.label}</span>
          </a>
        ))}
      </nav>

      <div className="mt-8 p-4 bg-gray-800 rounded-lg">
        <h3 className="font-semibold mb-2">আজকের সারাংশ</h3>
        <p className="text-sm text-gray-300">কাজ করেছেন: ৪ ঘণ্টা</p>
        <p className="text-sm text-gray-300">সেশন: ৩ টি</p>
      </div>
    </aside>
  );
}
