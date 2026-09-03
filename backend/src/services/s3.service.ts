import { PutObjectCommand } from "@aws-sdk/client-s3";

import { s3 } from "../lib/s3.js";

const bucket = process.env.S3_BUCKET!;

export async function uploadObject(
  key: string,
  body: Buffer,
  contentType: string,
) {
  const command = new PutObjectCommand({
    Bucket: bucket,
    Key: key,
    Body: body,
    ContentType: contentType,
  });

  await s3.send(command);
  return { key };
}
