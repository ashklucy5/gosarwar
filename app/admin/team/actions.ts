"use server";
import { auth } from "@/lib/auth";
import { addCarouselItem, deleteCarouselItem, getCarouselItems } from "@/lib/db";
import { uploadToR2, deleteFromR2 } from "@/lib/r2";
import { revalidatePath } from "next/cache";

export async function addMember(formData: FormData): Promise<void> {
  const session = await auth();
  if (session?.user?.role !== "admin") throw new Error("Unauthorized");

  const file = formData.get("imageUrl") as File;
  if (!file || file.size === 0) return;

  const imageUrl = await uploadToR2(file, "team");
  await addCarouselItem("team", {
    name: formData.get("name") as string,
    role: formData.get("role") as string,
    linkedin: formData.get("linkedin") as string,
    imageUrl,
  });

  revalidatePath("/");
}

export async function deleteMember(formData: FormData): Promise<void> {
  const session = await auth();
  if (session?.user?.role !== "admin") throw new Error("Unauthorized");

  const slug = formData.get("slug") as string;
  if (!slug) return;

  const items = await getCarouselItems("team");
  const item = items.find(i => i.slug === slug);
  if (item?.data?.imageUrl) await deleteFromR2(item.data.imageUrl);

  await deleteCarouselItem(slug);
  revalidatePath("/");
}