// workers/utils/presign.ts
import { sha256 } from "js-sha256";

export async function presignR2Get(
  key: string,
  opts: {
    bucketUrl: string; // e.g., https://<accountid>.r2.cloudflarestorage.com/insighthunter-reports
    accessKeyId: string;
    secretAccessKey: string;
    expiresIn: number;
  }
) {
  const method = "GET";
  const host = new URL(opts.bucketUrl).host;
  const canonicalUri = `/${key}`;
  const now = new Date();
  const amzDate = now.toISOString().replace(/[-:]/g, "").slice(0, 15) + "Z";
  const dateStamp = amzDate.slice(0, 8);
  const region = "auto";
  const service = "s3";
  const algorithm = "AWS4-HMAC-SHA256";
  const credentialScope = `${dateStamp}/${region}/${service}/aws4_request`;
  const signedHeaders = "host";

  const canonicalQuery = new URLSearchParams({
    "X-Amz-Algorithm": algorithm,
    "X-Amz-Credential": `${opts.accessKeyId}/${credentialScope}`,
    "X-Amz-Date": amzDate,
    "X-Amz-Expires": String(opts.expiresIn),
    "X-Amz-SignedHeaders": signedHeaders
  });

  const canonicalRequest = [
    method,
    canonicalUri,
    canonicalQuery.toString(),
    `host:${host}`,
    "",
    signedHeaders,
    "UNSIGNED-PAYLOAD"
  ].join("\n");

  const stringToSign = [
    algorithm,
    amzDate,
    credentialScope,
    sha256(canonicalRequest)
  ].join("\n");

  const kDate = await hmac(`AWS4${opts.secretAccessKey}`, dateStamp);
  const kRegion = await hmac(kDate, region);
  const kService = await hmac(kRegion, service);
  const kSigning = await hmac(kService, "aws4_request");
  const signature = await hmacHex(kSigning, stringToSign);

  canonicalQuery.append("X-Amz-Signature", signature);
  const url = `${opts.bucketUrl}${canonicalUri}?${canonicalQuery.toString()}`;
  return url;
}

async function hmac(key: string | ArrayBuffer, data: string) {
  const enc = new TextEncoder().encode(typeof key === "string" ? key : key);
  const cryptoKey = await crypto.subtle.importKey("raw", enc, { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  const sig = await crypto.subtle.sign("HMAC", cryptoKey, new TextEncoder().encode(data));
  return sig;
}
async function hmacHex(key: ArrayBuffer, data: string) {
  const cryptoKey = await crypto.subtle.importKey("raw", key, { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  const sig = await crypto.subtle.sign("HMAC", cryptoKey, new TextEncoder().encode(data));
  return [...new Uint8Array(sig)].map(b => b.toString(16).padStart(2, "0")).join("");
}
