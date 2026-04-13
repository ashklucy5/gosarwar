import { getCarouselItems } from "@/lib/db";
import { addWork, deleteWork } from "./actions";

export default async function WorksAdmin() {
  const items = await getCarouselItems("work");

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Works Carousel</h2>
      <form action={addWork} className="bg-white p-4 rounded-xl border grid grid-cols-1 md:grid-cols-4 gap-3 items-end">
        <div><label className="text-xs font-medium">Title</label><input name="title" placeholder="Project Title" required className="input" /></div>
        <div><label className="text-xs font-medium">Category</label><input name="category" placeholder="e.g. Web Design" className="input" /></div>
        <div><label className="text-xs font-medium">Link</label><input name="link" placeholder="https://..." className="input" /></div>
        <div><label className="text-xs font-medium">Image</label><input type="file" name="imageUrl" accept="image/*" required className="input py-1" /></div>
        <div className="md:col-span-4"><button type="submit" className="bg-violet-600 text-white px-4 py-2 rounded-lg hover:bg-violet-700">Add Work Item</button></div>
      </form>
      <div className="grid gap-4">
        {items.map((w) => (
          <div key={w.slug} className="bg-white p-4 rounded-xl border flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img src={w.data.imageUrl} alt={w.data.title} className="w-16 h-16 rounded object-cover bg-gray-100" />
              <div><p className="font-bold">{w.data.title}</p><p className="text-sm text-gray-500">{w.data.category}</p></div>
            </div>
            <form action={deleteWork}><input type="hidden" name="slug" value={w.slug} /><button className="text-red-600 hover:underline px-3 py-1">Delete</button></form>
          </div>
        ))}
        {items.length === 0 && <p className="text-gray-500 text-center py-4">No works added yet.</p>}
      </div>
    </div>
  );
}