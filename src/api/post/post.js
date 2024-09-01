import {client} from '../index.js';

const URLS = {
  blog: "/blogs",
};

/**
 * 게시글 최근 목록 조회
 * @returns {Promise<axios.AxiosResponse<any>>}
 */
export const getLatestPost = async () => {

  return await client.get(URLS.blog + "/latest")
}

/**
 * 게시글 전체 조회
 * @returns {Promise<axios.AxiosResponse<any>>}
 */
export const getPostList = async (params) => {

  return await client.get(URLS.blog, { params });
}

/**
 * 게시글 상세 조회
 * @param postSlug
 * @returns {Promise<axios.AxiosResponse<any>>}
 */
export const findPostDetail = async (postSlug) => {
  
  return await client.get(URLS.blog + `/${postSlug}`)
}

/**
 * 게시글 등록
 * @param formData
 * @returns {Promise<axios.AxiosResponse<any>>}
 */
export const createPost = async (formData) => {

  return await client.post(URLS.blog, formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
}