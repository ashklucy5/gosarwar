import { getSection } from "@/lib/db";
import { updateHero } from "./actions";

export default async function HeroAdmin() {
  const hero = await getSection("hero");
  const d = hero?.data || {};

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Hero Section</h2>
      <form action={updateHero} className="bg-white p-6 rounded-xl shadow-sm border space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input name="tagline" defaultValue={d.tagline || ""} placeholder="Tagline" className="input" />
          <input name="titleStart" defaultValue={d.titleStart || ""} placeholder="Title Start" className="input" />
          <input name="titleHighlight" defaultValue={d.titleHighlight || ""} placeholder="Highlighted Word" className="input" />
          <input name="titleMiddle" defaultValue={d.titleMiddle || ""} placeholder="Title Middle" className="input" />
          <input name="titleEnd" defaultValue={d.titleEnd || ""} placeholder="Title End" className="input" />
          <input name="ctaText" defaultValue={d.ctaText || ""} placeholder="Button Text" className="input" />
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-medium">Services (comma separated)</label>
          <textarea name="servicesList" defaultValue={d.servicesList?.join(", ") || ""} className="w-full p-2 border rounded-lg" rows={2} />
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-medium">Hero Image</label>
          {d.imageUrl && <img src={d.imageUrl} alt="Current" className="h-24 rounded object-cover" />}
          <input type="file" name="imageUrl" accept="image/*" className="block w-full text-sm" />
          <input type="hidden" name="existingImageUrl" value={d.imageUrl || ""} />
        </div>
        <button type="submit" className="bg-violet-600 text-white px-6 py-2 rounded-lg hover:bg-violet-700">Save Hero</button>
      </form>
    </div>
  );
}