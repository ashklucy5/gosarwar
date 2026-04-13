import { getCarouselItems } from "@/lib/db";
import { addMember, deleteMember } from "./actions";

export default async function TeamAdmin() {
  const items = await getCarouselItems("team");

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Team Members</h2>
      <form action={addMember} className="bg-white p-4 rounded-xl border grid grid-cols-1 md:grid-cols-4 gap-3 items-end">
        <div><label className="text-xs font-medium">Name</label><input name="name" placeholder="Full Name" required className="input" /></div>
        <div><label className="text-xs font-medium">Role</label><input name="role" placeholder="e.g. Lead Designer" className="input" /></div>
        <div><label className="text-xs font-medium">LinkedIn</label><input name="linkedin" placeholder="https://linkedin.com/..." className="input" /></div>
        <div><label className="text-xs font-medium">Photo</label><input type="file" name="imageUrl" accept="image/*" required className="input py-1" /></div>
        <div className="md:col-span-4"><button type="submit" className="bg-violet-600 text-white px-4 py-2 rounded-lg hover:bg-violet-700">Add Team Member</button></div>
      </form>
      <div className="grid gap-4">
        {items.map((m) => (
          <div key={m.slug} className="bg-white p-4 rounded-xl border flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img src={m.data.imageUrl} alt={m.data.name} className="w-12 h-12 rounded-full object-cover bg-gray-100" />
              <div><p className="font-bold">{m.data.name}</p><p className="text-sm text-gray-500">{m.data.role}</p></div>
            </div>
            <form action={deleteMember}><input type="hidden" name="slug" value={m.slug} /><button className="text-red-600 hover:underline px-3 py-1">Remove</button></form>
          </div>
        ))}
        {items.length === 0 && <p className="text-gray-500 text-center py-4">No team members added yet.</p>}
      </div>
    </div>
  );
}