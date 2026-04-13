import { getSection } from "@/lib/db";
import { updateAbout } from "./actions";

export default async function AboutAdmin() {
  const about = await getSection("about");
  const d = about?.data || {};
  const stats = d.stats || {};

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">About Section</h2>
      <form action={updateAbout} className="bg-white p-6 rounded-xl shadow-sm border space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input name="badge" defaultValue={d.badge || ""} placeholder="Badge" className="input" />
          <input name="title" defaultValue={d.title || ""} placeholder="Title" className="input" />
        </div>
        <textarea name="subtitle" defaultValue={d.subtitle || ""} placeholder="Subtitle" className="input h-20" />
        <input name="heading" defaultValue={d.heading || ""} placeholder="Main Heading" className="input" />
        <textarea name="description" defaultValue={d.description || ""} placeholder="Description" className="input h-32" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <input name="statValue1" defaultValue={stats.value1 || ""} placeholder="Stat 1 Value" className="input" />
          <input name="statLabel1" defaultValue={stats.label1 || ""} placeholder="Stat 1 Label" className="input" />
          <input name="statValue2" defaultValue={stats.value2 || ""} placeholder="Stat 2 Value" className="input" />
          <input name="statLabel2" defaultValue={stats.label2 || ""} placeholder="Stat 2 Label" className="input" />
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-medium">About Image</label>
          {d.imageUrl && <img src={d.imageUrl} alt="Current" className="h-24 rounded object-cover" />}
          <input type="file" name="imageUrl" accept="image/*" className="block w-full text-sm" />
          <input type="hidden" name="existingImageUrl" value={d.imageUrl || ""} />
        </div>
        <button type="submit" className="bg-violet-600 text-white px-6 py-2 rounded-lg hover:bg-violet-700">Save About</button>
      </form>
    </div>
  );
}