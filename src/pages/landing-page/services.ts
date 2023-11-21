import { unsplashAccessKey, unsplashApi } from "../../utils/config";

export default {
  /** Send a GET request search photos */
  async SearchPhotos(query: string) {
    return unsplashApi.get(
      `/search/photos?query=${query}&client_id=${unsplashAccessKey}&per_page=8`,
    );
  },
};
