"use server";
import { auth } from "@/lib/auth";
import { addCarouselItem, deleteCarouselItem, getCarouselItems } from "@/lib/db";
import { uploadToR2, deleteFromR2 } from "@/lib/r2";
import { revalidatePath } from "next/cache";

export async function addWork(formData: FormData): Promise<void> {
  const session = await auth();
  if (session?.user?.role !== "admin") throw new Error("Unauthorized");

  const file = formData.get("imageUrl") as File;
  if (!file || file.size === 0) return;

  const imageUrl = await uploadToR2(file, "works");
  await addCarouselItem("work", {
    title: formData.get("title") as string,
    category: formData.get("category") as string,
    link: formData.get("link") as string,
    imageUrl,
  });

  revalidatePath("/");
}

export async function deleteWork(formData: FormData): Promise<void> {
  const session = await auth();
  if (session?.user?.role !== "admin") throw new Error("Unauthorized");

  const slug = formData.get("slug") as string;
  if (!slug) return;

  // Clean up R2 image before DB deletion
  const items = await getCarouselItems("work");
  const item = items.find(i => i.slug === slug);
  if (item?.data?.imageUrl) await deleteFromR2(item.data.imageUrl);

  await deleteCarouselItem(slug);
  revalidatePath("/");
}