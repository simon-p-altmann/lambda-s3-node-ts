import { S3Client, PutObjectCommand, GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

const s3Client = new S3Client({
  region: 'your-region', // e.g., 'us-east-1'
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

export const generateUploadURL = async (bucketName: string, key: string, expiresIn: number) => {
  const command = new PutObjectCommand({ Bucket: bucketName, Key: key });
  return await getSignedUrl(s3Client, command, { expiresIn });
};

export const generateDownloadURL = async (bucketName: string, key: string, expiresIn: number) => {
  const command = new GetObjectCommand({ Bucket: bucketName, Key: key });
  return await getSignedUrl(s3Client, command, { expiresIn });
};
