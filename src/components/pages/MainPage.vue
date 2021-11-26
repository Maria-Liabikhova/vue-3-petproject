<template>
  <div class="main-page">
    <h1 class="main-page__h1">Hello world!</h1>
    <input
      class="main-page__search"
      v-model="searchQuery"
      placeholder="Search..."
    />
    <div class="main-page__section">
      <div class="main-page__create">
        <div class="main-page__choisewrap">
          <span class="text--green"> You can add one of this guys: </span>
          <span
            class="text--green main-page__p"
            v-for="extraPokemon in extraPokemons"
            :key="extraPokemon.name"
            @click="chosenValue = extraPokemon.name"
          >
            &nbsp;{{ extraPokemon.name }}
          </span>
        </div>
        <UiForm
          :button-name="buttonName"
          @onCreate="create"
          :chosenValue="chosenValue"
        />
      </div>
      <UiSelect
        v-model="selectedSort"
        class="main-page__select"
        :options="sortOptions"
        :title="sortTitle"
      />
    </div>
    <div class="main-page__content">
      <div
        class="main-page__cardwrapper"
        v-for="pokemon in filteredPokemonsList"
        :key="pokemon.id"
      >
        <UiCard
          :titleFirst="titleFirst"
          :titleSecond="titleSecond"
          :text="pokemon.name.toUpperCase()"
          :imgSrc="`https://img.pokemondb.net/artwork/${pokemon.name}.jpg`"
          :link="`https://www.pokemon.com/us/pokedex/${pokemon.name}`"
          :imgAlt="imgAlt"
          :linkName="
            pokemon.name.toUpperCase() + ' ' + 'invite you to it`s page'
          "
        />
      </div>
    </div>
    <UiPagination
      :page="currentPage"
      :totalPages="totalPages"
      @updatePage="updatePage"
    />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { mapActions, mapMutations, mapState } from "vuex";

export default defineComponent({
  name: "MainPage",
  data() {
    return {
      titleFirst: "Name:",
      titleSecond: "Link:",
      imgAlt: "pokemon",
      buttonName: "Create",
      extraPokemons: [
        { name: "Ndoria" },
        { name: "Nidoran-f" },
        { name: "Sandslash" },
        { name: "Sandshrew" },
        { name: "Raichu" },
        { name: "Pikachu" },
      ],
      chosenValue: "",
      sortOptions: [{ name: "name", title: "Sort by name" }],
      sortTitle: "Choose sort creteria",
      selectedSort: "",
      searchQuery: "",
    };
  },
  computed: {
    ...mapState("pokemons", ["pokemons", "currentPage", "totalPages"]),
    pokemonsList() {
      if (this.selectedSort) {
        return [...this.pokemons].sort((p1, p2) =>
          p1[this.selectedSort].localeCompare(p2[this.selectedSort])
        );
      } else return this.pokemons;
    },
    filteredPokemonsList() {
      return this.pokemonsList.filter((pokemon) =>
        pokemon.name.includes(this.searchQuery.toLowerCase())
      );
    },
  },
  methods: {
    ...mapActions("pokemons", ["fetchPokemons", "addPokemon"]),
    ...mapMutations("pokemons", ["setCurrentPage"]),
    create(name) {
      let pokemon = {
        id: Date.now(),
        name: name.toLowerCase(),
      };
      this.addPokemon(pokemon);
    },
    updatePage(payload) {
      this.setCurrentPage(payload);
      this.fetchPokemons();
    },
  },
  mounted() {
    this.fetchPokemons();
  },
});
</script>

<style scoped>
.main-page {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.main-page__h1 {
  color: var(--green-color);
  font-family: var(--main-font);
  font-size: 50px;
  letter-spacing: 2px;
}
.main-page__section {
  margin-bottom: 45px;
  display: flex;
}
.main-page__create {
  margin-right: 50px;
  border: 1px solid var(--navy-color);
  padding: 10px;
}
.main-page__select {
  border: 1px solid var(--navy-color);
  padding: 10px;
}
.main-page__content {
  border: 3px solid var(--navy-color);
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  padding-top: 30px;
  padding-bottom: 30px;
  margin-bottom: 20px;
}
.main-page__cardwrapper {
  margin-left: auto;
  margin-right: auto;
}
.main-page__p {
  color: var(--green-color);
  opacity: 0.6;
}
.main-page__p:hover {
  transition: all 0.3s ease;
  cursor: pointer;
  color: var(--green-color);
  opacity: 1;
}
.main-page__choisewrap {
  margin-bottom: 30px;
}
.main-page__search {
  height: var(--input-height);
  color: var(--green-color);
  border: 2px solid var(--black-color);
  outline: none;
  margin-bottom: 30px;
}
@media (max-width: 1279px) {
  .main-page__content {
    grid-template-columns: 1fr 1fr 1fr;
  }
}
@media (max-width: 991px) {
  .main-page__content {
    grid-template-columns: 1fr 1fr;
  }
  .main-page__section {
    display: block;
  }
  .main-page__create {
    margin-right: 0px;
    margin-bottom: 20px;
  }
  .main-page__select {
    border: none;
  }
}
@media (max-width: 479px) {
  .main-page__content {
    grid-template-columns: 1fr;
  }
}
</style>
