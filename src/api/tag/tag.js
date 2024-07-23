import {client} from "../index.js";

const URLS = {
  tag: "/tags",
};

/**
 * 태그 조회
 * @param name
 * @returns {Promise<axios.AxiosResponse<any>>}
 */
export const findTags = async (name) => {

  return await client.get(URLS.tag, {
    params: { name }
  });
};

/**
 * 태그 등록
 * @param data
 * @returns {Promise<axios.AxiosResponse<any>>}
 */
export const createTag = async (data) => {

  return await client.post(URLS.tag, data);
};