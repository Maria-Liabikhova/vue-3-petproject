import axios from "axios";
export default {
  // namespaced: true,
  async apiFetchPokemons() {
    try {
      const res = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=30");
      console.log(res.data.results);
    } catch (e) {
      alert("Mistake");
    }
    // .then(name => this.setState({pokemons:name.results}));
  },
};
