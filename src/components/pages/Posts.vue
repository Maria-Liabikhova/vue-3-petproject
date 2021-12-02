<template>
  <div class="posts">
    <div class="posts__wrapper">
      <div class="posts__card" v-for="post in currentPagePosts" :key="post.id">
        <p class="posts__text">
          <span class="posts__subtitle">Id:</span>{{ post.id }}
        </p>
        <h2 class="posts__h2">
          <span class="posts__subtitle">Title:</span> {{ post.title }}
        </h2>
        <p class="posts__text">
          <span class="posts__subtitle">Post:</span>{{ post.body }}
        </p>
      </div>
      <div
        v-if="currentPage < totalPages"
        v-intersection="onIntersection"
        class="posts__loader"
      ></div>
      <Loading v-if="currentPage < totalPages" />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Loading from "@/components/common/Loading.vue";
import { fetchPosts } from "@/hooks/fetchPosts";

export default defineComponent({
  name: "Posts",
  components: { Loading },
  data() {
    return {
      loader: false,
    };
  },
  setup() {
    const {
      fetch,
      posts,
      onIntersection,
      postsLimit,
      currentPage,
      totalPages,
      currentPagePosts,
    } = fetchPosts();

    return {
      fetch,
      posts,
      onIntersection,
      postsLimit,
      currentPage,
      totalPages,
      currentPagePosts,
    };
  },
});
</script>

<style scoped>
.posts {
  height: 100%;
  overflow: hidden;
  padding: 30px;
  border: 3px solid var(--navy-color);
  box-sizing: border-box;
  margin: 30px;
}
.posts__card {
  margin-top: 15px;
  border: 3px solid var(--green-color);
  box-sizing: border-box;
  padding: 7px;
}
.posts__h2 {
  font-size: 16px;
}
.posts__subtitle {
  font-size: 25px;
  font-family: var(--main-font);
  font-weight: bold;
}
.posts__loader {
  margin: 20px;
}
</style>
