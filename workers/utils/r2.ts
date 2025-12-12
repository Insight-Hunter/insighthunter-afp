export async function putReport(env: any, key: string, bytes: Uint8Array) {
  await env.R2.put(key, bytes, { httpMetadata: { contentType: "application/pdf" } });
}
export async function presign(env: any, key: string, ttlSeconds = 300): Promise<string> {
  // Use R2 signed URL API via S3-compatible signature; simplified here for Workers binding
  const obj = await env.R2.get(key);
  if (!obj) throw new Error("Not found");
  // For demo: expose public link if bucket configured; for production, use signed URLs via custom logic or S3 signature lib
  return `${env.R2_BUCKET_URL}/${key}?ttl=${ttlSeconds}`; // replace with real signature generation
}
