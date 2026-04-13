import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { headers } from "next/headers";
import Link from "next/link";

const navItems = [
  { href: "/admin", label: "Dashboard" },
  { href: "/admin/hero", label: "Hero" },
  { href: "/admin/about", label: "About" },
  { href: "/admin/works", label: "Works" },
  { href: "/admin/team", label: "Team" },
  { href: "/admin/contact", label: "Contact" },
];

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const session = await auth();
  
  // ✅ CRITICAL FIX: Allow access to login page without redirecting
  const headersList = await headers();
  const path = headersList.get("next-url") || "";
  const isLoginPage = path.includes("/admin/login");

  if (!session && !isLoginPage) {
    redirect("/admin/login");
  }

  // If on login page, just render children (no sidebar)
  if (isLoginPage) {
    return <>{children}</>;
  }

  // Protected Admin UI
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-56 bg-white border-r p-4 hidden md:block">
        <h1 className="text-xl font-bold text-violet-700 mb-6">GoSarwar Admin</h1>
        <nav className="space-y-1">
          {navItems.map(item => (
            <Link key={item.href} href={item.href} className="block px-3 py-2 rounded-lg text-sm hover:bg-violet-50 hover:text-violet-700 transition">
              {item.label}
            </Link>
          ))}
        </nav>
        <form action={async () => { "use server"; const { signOut } = await import("@/lib/auth"); await signOut(); }} className="mt-8">
          <button className="text-sm text-red-600 hover:underline w-full text-left px-3">Logout</button>
        </form>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <header className="bg-white border-b px-6 py-4 md:hidden flex justify-between items-center">
          <h1 className="font-bold text-violet-700">GoSarwar Admin</h1>
        </header>
        <main className="p-6 flex-1 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}