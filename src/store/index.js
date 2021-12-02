import Vuex from "vuex";
import pokemons from "./modules/pokemons";

export default new Vuex.Store({
  modules: {
    pokemons,
  },
});
