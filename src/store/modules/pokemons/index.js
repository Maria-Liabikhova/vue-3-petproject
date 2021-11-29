import apiPokemons from "@/api/pokemons";
export default {
  namespaced: true,
  state: {
    pokemons: [],
    limit: 20,
    currentPage: 1,
    totalCount: 0,
    totalPages: 0,
  },
  mutations: {
    setPokemons(state, payload) {
      state.pokemons = payload;
    },
    setTotalCount(state, payload) {
      state.totalCount = payload;
      state.totalPages = Math.ceil(payload / state.limit);
    },
    add_pokemons(state, payload) {
      let newArr = [...state.pokemons];
      newArr.unshift(payload);
      state.pokemons = newArr;
    },
    setCurrentPage(state, payload) {
      state.currentPage = payload;
    },
  },
  actions: {
    async fetchPokemons({ commit }) {
      const res = await apiPokemons.apiFetchPokemons();
      commit("setPokemons", res.results);
      commit("setTotalCount", res.count);
    },
    addPokemon({ commit }, payload) {
      commit("add_pokemons", payload);
    },
  },
};
