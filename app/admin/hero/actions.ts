"use server";
import { auth } from "@/lib/auth";
import { getSection, updateSection } from "@/lib/db";
import { uploadToR2, deleteFromR2 } from "@/lib/r2";
import { revalidatePath } from "next/cache";

export async function updateHero(formData: FormData): Promise<void> {
  const session = await auth();
  if (session?.user?.role !== "admin") throw new Error("Unauthorized");

  const existing = await getSection("hero");
  const existingUrl = existing?.data?.imageUrl as string | undefined;
  let newUrl = existingUrl;

  const file = formData.get("imageUrl") as File;
  if (file && file.size > 0) {
    if (existingUrl) await deleteFromR2(existingUrl);
    newUrl = await uploadToR2(file, "hero");
  }

  await updateSection("hero", {
    tagline: formData.get("tagline"),
    titleStart: formData.get("titleStart"),
    titleHighlight: formData.get("titleHighlight"),
    titleMiddle: formData.get("titleMiddle"),
    titleEnd: formData.get("titleEnd"),
    ctaText: formData.get("ctaText"),
    imageUrl: newUrl,
    servicesList: JSON.parse((formData.get("servicesList") as string) || "[]"),
  });

  revalidatePath("/");
}