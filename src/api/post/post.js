import {client} from '../index.js';

const URLS = {
  blog: "/blogs",
};

/**
 * 게시글 전체 조회
 * @returns {Promise<axios.AxiosResponse<any>>}
 */
export const getPostList = async () => {

  return await client.get(URLS.blog);
}

/**
 * 게시글 상세 조회
 * @param postId
 * @returns {Promise<axios.AxiosResponse<any>>}
 */
export const findPostDetail = async (postId) => {
  
  return await client.get(URLS.blog + `/${postId}`)
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