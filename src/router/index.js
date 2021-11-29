import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Pokemons",
    component: () => import("@/components/pages/Pokemons.vue"),
  },
  {
    path: "/pokemon-:name",
    name: "Pokemon",
    component: () => import("@/components/pages/Pokemon.vue"),
  },
  {
    path: "/posts",
    name: "Posts",
    component: () => import("@/components/pages/Posts.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
