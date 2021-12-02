import axios from "axios";
import { onMounted, ref } from "vue";

export function fetchPosts() {
  let posts = ref([]);
  let postsLimit = ref(20);
  let currentPage = ref(1);
  let totalPages = ref(0);
  let currentPagePosts = ref([]);

  let fetch = async () => {
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
      posts.value = res.data;
      totalPages.value = Math.ceil(posts.value.length / postsLimit.value);

      let newArr = [...posts.value];
      let cut = postsLimit.value * currentPage.value;
      currentPagePosts.value = newArr.slice(0, cut);
    } catch (e) {
      console.log(e);
    }
  };
  let setCurrentPage = () => {
    if (currentPage.value < totalPages.value) {
      currentPage.value += 1;
    }
  };
  let onIntersection = async () => {
    await setCurrentPage();
    await fetch();
  };

  onMounted(fetch);

  return {
    fetch,
    posts,
    postsLimit,
    currentPage,
    totalPages,
    currentPagePosts,
    onIntersection,
  };
}
