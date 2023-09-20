import { DeleteObjectCommand, GetObjectCommand, PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

const s3Client = new S3Client({
    region: process.env.AWS_REGION,
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    },
});

async function uploadImageToS3(file, fileName) {
    const params = {
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: `${fileName}`,
        Body: file,
    };

    const command = new PutObjectCommand(params);
    const res = await s3Client.send(command);

    const getCommand = new GetObjectCommand(params);
    const url = await getSignedUrl(s3Client, getCommand, { expiresIn: 3600 });

    return url;
}

async function deleteImageFromS3(fileName) {
    const params = {
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: `${fileName}`,
    };
    const command = new DeleteObjectCommand(params);
    const res = await s3Client.send(command);
}

export { uploadImageToS3, deleteImageFromS3 }