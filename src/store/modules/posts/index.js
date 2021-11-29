import apiPosts from "@/api/posts";
export default {
  namespaced: true,
  state: {
    posts: [],
    currentPagePosts: [],
    postsLimit: 20,
    currentPage: 1,
    totalPages: 0,
  },
  mutations: {
    setPosts(state, payload) {
      state.posts = payload;
    },
    setTotalPages(state) {
      state.totalPages = Math.ceil(state.posts.length / state.postsLimit);
    },
    setCurrentPagePosts(state) {
      let newArr = [...state.posts];
      let cut = state.postsLimit * state.currentPage;
      state.currentPagePosts = newArr.slice(0, cut);
    },
    setCurrentPage(state) {
      if (state.currentPage < state.totalPages) {
        state.currentPage += 1;
      }
    },
  },
  actions: {
    async fetchPosts({ commit }) {
      const res = await apiPosts.apiFetchPosts();
      commit("setPosts", res.data);
      commit("setTotalPages");
      commit("setCurrentPagePosts");
    },
  },
};
