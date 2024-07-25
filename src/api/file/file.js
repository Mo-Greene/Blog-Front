import {client} from "../index.js";
import axios from "axios";

const URLS = {
  file: "/files",
};

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

    const result = presignedUrl.split('?')[0];
    return result;
  } catch (error) {
    console.error('Error during file upload:', error);
    throw error;
  }
}