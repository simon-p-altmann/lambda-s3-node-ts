import { S3Client, PutObjectCommand, GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { generateUploadURL, generateDownloadURL } from '../../src/service/s3-client'

jest.mock('@aws-sdk/client-s3');
jest.mock('@aws-sdk/s3-request-presigner');

describe('S3 URL Generation', () => {
  const bucketName = 'test-bucket';
  const key = 'test-key';
  const expiresIn = 3600; // 1 hour

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should generate an upload URL', async () => {
    const mockSignedUrl = 'https://mock-signed-url';
    (getSignedUrl as jest.Mock).mockResolvedValue(mockSignedUrl);

    const result = await generateUploadURL(bucketName, key, expiresIn);

    expect(getSignedUrl).toHaveBeenCalledWith(
      expect.any(S3Client),
      expect.any(PutObjectCommand),
      { expiresIn }
    );
    expect(result).toBe(mockSignedUrl);
  });

  it('should generate a download URL', async () => {
    const mockSignedUrl = 'https://mock-signed-url';
    (getSignedUrl as jest.Mock).mockResolvedValue(mockSignedUrl);

    const result = await generateDownloadURL(bucketName, key, expiresIn);

    expect(getSignedUrl).toHaveBeenCalledWith(
      expect.any(S3Client),
      expect.any(GetObjectCommand),
      { expiresIn }
    );
    expect(result).toBe(mockSignedUrl);
  });
});
