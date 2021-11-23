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
    add_pokemons(state, payload) {
      let newArr = [...state.pokemons];
      newArr.unshift(payload);
      state.pokemons = newArr;
    },
  },
  actions: {
    async fetchPokemons({ commit }) {
      const res = await apiFetchPokemons.apiFetchPokemons();
      commit("setPokemons", res);
    },
    addPokemon({ commit }, payload) {
      commit("add_pokemons", payload);
    },
  },
};
