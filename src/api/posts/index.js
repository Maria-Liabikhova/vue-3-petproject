import axios from "axios";
import posts from "@/store/modules/posts";

export default {
  async apiFetchPosts() {
    let postsLimit = posts.state.postsLimit;
    let currentPage = posts.state.currentPage;
    try {
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/posts",
        {
          params: {
            limit: postsLimit,
            page: currentPage,
          },
        }
      );
      return res;
    } catch (e) {
      console.log(e);
    }
  },
};
