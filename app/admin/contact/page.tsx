import { getSection } from "@/lib/db";
import { updateContact } from "./actions";

export default async function ContactAdmin() {
  const contact = await getSection("contact");
  const d = contact?.data || {};

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Contact & Footer</h2>
      <form action={updateContact} className="bg-white p-6 rounded-xl shadow-sm border space-y-4">
        <input name="title" defaultValue={d.title || ""} placeholder="Footer Title" className="input" />
        <textarea name="subtitle" defaultValue={d.subtitle || ""} placeholder="Subtitle" className="input h-20" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input name="phone" defaultValue={d.phone || ""} placeholder="Phone Number" className="input" />
          <input name="email" defaultValue={d.email || ""} placeholder="Email Address" className="input" />
          <input name="whatsappLink" defaultValue={d.whatsappLink || ""} placeholder="WhatsApp Link" className="input" />
          <input name="youtubeLink" defaultValue={d.youtubeLink || ""} placeholder="YouTube Link" className="input" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t">
          <div className="space-y-2">
            <label className="block text-sm font-medium">WeChat QR Code</label>
            {d.wechatQrUrl && <img src={d.wechatQrUrl} alt="WeChat QR" className="h-24 rounded border" />}
            <input type="file" name="wechatQr" accept="image/*" className="input" />
            <input type="hidden" name="existingWechat" value={d.wechatQrUrl || ""} />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium">QQ QR Code</label>
            {d.qqQrUrl && <img src={d.qqQrUrl} alt="QQ QR" className="h-24 rounded border" />}
            <input type="file" name="qqQr" accept="image/*" className="input" />
            <input type="hidden" name="existingQq" value={d.qqQrUrl || ""} />
          </div>
        </div>
        <button type="submit" className="bg-violet-600 text-white px-6 py-2 rounded-lg hover:bg-violet-700">Save Contact</button>
      </form>
    </div>
  );
}