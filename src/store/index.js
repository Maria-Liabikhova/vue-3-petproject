import Vuex from "vuex";
import pokemons from "./modules/pokemons";
import posts from "./modules/posts";

export default new Vuex.Store({
  modules: {
    pokemons,
    posts,
  },
});
