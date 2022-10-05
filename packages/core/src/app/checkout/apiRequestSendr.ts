// This file is written for integration with custom bigcommerce store at RoyalCyber.
import axios, { AxiosRequestConfig } from "axios";

const postService = (
  url: string,
  data: any,
  config?: AxiosRequestConfig<any>
) => {
  return axios.post(url, data, config);
};

export const ApiService = { post: postService };
// module.export { apiService: { post: }}
