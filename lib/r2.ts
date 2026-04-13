export async function uploadToR2(file: File, folder: string): Promise<string> {
  const bucket = process.env.GOSARWAR_IMAGES as any;
  if (!bucket) throw new Error("R2 bucket not bound");

  const key = `${folder}/${Date.now()}-${file.name.replace(/\s+/g, '-')}`;
  await bucket.put(key, file.stream(), { httpMetadata: { contentType: file.type } });
  
  const accountId = process.env.CLOUDFLARE_ACCOUNT_ID || process.env.R2_ACCOUNT_ID;
  return `https://pub-${accountId}.r2.dev/${key}`;
}

export async function deleteFromR2(url: string): Promise<void> {
  const bucket = process.env.GOSARWAR_IMAGES as any;
  const key = url.split('/').pop();
  if (key && bucket) await bucket.delete(key);
}