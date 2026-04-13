"use server";
import { auth } from "@/lib/auth";
import { getSection, updateSection } from "@/lib/db";
import { uploadToR2 } from "@/lib/r2";
import { revalidatePath } from "next/cache";

async function handleQrUpload(
  fd: FormData, 
  fileField: string, 
  existingField: string, 
  folder: string
): Promise<string> {
  const file = fd.get(fileField) as File;
  const existingUrl = fd.get(existingField) as string;
  if (file && file.size > 0) {
    return uploadToR2(file, folder);
  }
  return existingUrl;
}

export async function updateContact(formData: FormData): Promise<void> {
  const session = await auth();
  if (session?.user?.role !== "admin") throw new Error("Unauthorized");

  const [wechatQrUrl, qqQrUrl] = await Promise.all([
    handleQrUpload(formData, "wechatQr", "existingWechat", "qr"),
    handleQrUpload(formData, "qqQr", "existingQq", "qr")
  ]);

  await updateSection("contact", {
    title: formData.get("title"),
    subtitle: formData.get("subtitle"),
    phone: formData.get("phone"),
    email: formData.get("email"),
    whatsappLink: formData.get("whatsappLink"),
    youtubeLink: formData.get("youtubeLink"),
    wechatQrUrl,
    qqQrUrl,
  });

  revalidatePath("/");
}