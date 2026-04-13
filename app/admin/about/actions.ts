"use server";
import { auth } from "@/lib/auth";
import { getSection, updateSection } from "@/lib/db";
import { uploadToR2, deleteFromR2 } from "@/lib/r2";
import { revalidatePath } from "next/cache";

export async function updateAbout(formData: FormData): Promise<void> {
  const session = await auth();
  if (session?.user?.role !== "admin") throw new Error("Unauthorized");

  const existing = await getSection("about");
  const existingUrl = existing?.data?.imageUrl as string | undefined;
  let newUrl = existingUrl;

  const file = formData.get("imageUrl") as File;
  if (file && file.size > 0) {
    if (existingUrl) await deleteFromR2(existingUrl);
    newUrl = await uploadToR2(file, "about");
  }

  await updateSection("about", {
    badge: formData.get("badge"),
    title: formData.get("title"),
    subtitle: formData.get("subtitle"),
    heading: formData.get("heading"),
    description: formData.get("description"),
    imageUrl: newUrl,
    stats: {
      value1: formData.get("statValue1"),
      label1: formData.get("statLabel1"),
      value2: formData.get("statValue2"),
      label2: formData.get("statLabel2"),
    }
  });

  revalidatePath("/");
}