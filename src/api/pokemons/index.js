import axios from "axios";
export default {
  async apiFetchPokemons() {
    try {
      const res = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=30");
      return res.data.results;
    } catch (e) {
      console.log(e);
    }
  },
};
