import axios from "axios";
import pokemons from "@/store/modules/pokemons";

export default {
  async apiFetchPokemons() {
    let limit = pokemons.state.limit;
    let currentPage = pokemons.state.currentPage;
    try {
      const res = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=24",
        {
          params: {
            limit: limit,
            offset: limit * currentPage,
          },
        }
      );
      return res.data;
    } catch (e) {
      console.log(e);
    }
  },
};
