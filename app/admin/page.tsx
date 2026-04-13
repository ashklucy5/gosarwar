import { getSection, getCarouselItems } from "@/lib/db";
import Link from "next/link";

export default async function AdminDashboard() {
  const [hero, about, contact, works, team] = await Promise.all([
    getSection("hero"),
    getSection("about"),
    getSection("contact"),
    getCarouselItems("work"),
    getCarouselItems("team"),
  ]);

  const stats = [
    { label: "Hero Section", value: hero?.updatedAt ? "✅ Updated" : "⚪ Not set", link: "/admin/hero" },
    { label: "About Section", value: about?.updatedAt ? "✅ Updated" : "⚪ Not set", link: "/admin/about" },
    { label: "Contact Info", value: contact?.updatedAt ? "✅ Updated" : "⚪ Not set", link: "/admin/contact" },
    { label: "Works Items", value: works.length.toString(), link: "/admin/works" },
    { label: "Team Members", value: team.length.toString(), link: "/admin/team" },
  ];

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((stat) => (
          <Link key={stat.label} href={stat.link} className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition cursor-pointer">
            <h3 className="text-lg font-semibold text-gray-700">{stat.label}</h3>
            <p className="text-2xl font-bold text-violet-600 mt-2">{stat.value}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}