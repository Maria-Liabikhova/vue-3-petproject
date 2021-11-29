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
        v-if="notLastPage"
        v-intersection="onIntersection"
        class="posts__loader"
      ></div>
      <Loading v-if="notLastPage" />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { mapActions, mapMutations, mapState } from "vuex";
import Loading from "@/components/common/Loading.vue";

export default defineComponent({
  name: "Posts",
  components: { Loading },
  data() {
    return {
      loader: false,
    };
  },
  computed: {
    ...mapState("posts", ["currentPagePosts", "currentPage", "totalPages"]),
    notLastPage() {
      return this.currentPage < this.totalPages;
    },
  },
  methods: {
    ...mapActions("posts", ["fetchPosts"]),
    ...mapMutations("posts", ["setCurrentPage"]),
    onIntersection() {
      this.setCurrentPage(), this.fetchPosts();
    },
  },
  mounted() {
    this.fetchPosts();
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
