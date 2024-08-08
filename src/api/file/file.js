import {client} from "../index.js";
import axios from "axios";

const URLS = {
  file: "/files",
};

const CDN_BASE_URL = import.meta.env.VITE_CDN_BASE_URL;

/**
 * 프리사인드 url 조회
 * @returns {Promise<axios.AxiosResponse<any>>}
 */
export const getPresignedUrl = async () => {

  const response = await client.get(URLS.file);
  return response.data.data;
}

/**
 * s3 upload
 * @param file
 * @param presignedUrl
 * @returns {Promise<void>}
 */
export const uploadToS3 = async (file, presignedUrl) => {
  try {
    await axios.put(presignedUrl, file, {
      headers: {
        'Content-Type': file.type
      }
    });
  } catch (error) {
    console.error('Error uploading to S3:', error);
    throw error;
  }
}

/**
 * 파일 업로드
 * @param file
 * @returns {Promise<*>}
 */
export const fileUpload = async (file) => {
  try {
    const presignedUrl = await getPresignedUrl();
    await uploadToS3(file, presignedUrl);
    const s3Url = new URL(presignedUrl.split('?')[0]);
    const objectKey = s3Url.pathname.substring(1);

    return `${CDN_BASE_URL}/${objectKey}`;
  } catch (error) {
    console.error('Error during file upload:', error);
    throw error;
  }
}