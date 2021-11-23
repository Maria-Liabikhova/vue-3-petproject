import apiFetchPokemons from "@/api/pokemons";
export default {
  namespaced: true,
  state: {
    pokemons: [],
  },
  mutations: {
    setPokemons(state, payload) {
      state.pokemons = payload;
    },
  },
  actions: {
    async fetchPokemons({ commit }) {
      const res = await apiFetchPokemons.apiFetchPokemons();
      commit("setPokemons", res);
    },
  },
};
