<template>
  <div class="pokemons">
    <input
      v-focus
      class="pokemons__search"
      v-model="searchQuery"
      placeholder="Search..."
    />
    <div class="pokemons__section">
      <div class="pokemons__create">
        <div class="pokemons__choisewrap">
          <span class="text--green"> You can add one of this guys: </span>
          <span
            class="text--green pokemons__p"
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
        class="pokemons__select"
        :options="sortOptions"
        :title="sortTitle"
      />
    </div>
    <div class="pokemons__content">
      <div
        class="pokemons__cardwrapper"
        v-for="pokemon in filteredPokemonsList"
        :key="pokemon.id"
      >
        <UiCard
          :titleFirst="titleFirst"
          :titleSecond="titleSecond"
          :text="pokemon.name.toUpperCase()"
          :imgSrc="`https://img.pokemondb.net/artwork/${pokemon.name}.jpg`"
          :link="`/pokemon-${pokemon.name}`"
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
  name: "Pokemons",
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
.pokemons {
  width: 100%;
  height: 100%;
  overflow: hidden;
  padding: 30px;
}
.pokemons__section {
  margin-bottom: 45px;
  display: flex;
}
.pokemons__create {
  margin-right: 50px;
  border: 1px solid var(--navy-color);
  padding: 10px;
}
.pokemons__select {
  border: 1px solid var(--navy-color);
  padding: 10px;
}
.pokemons__content {
  border: 3px solid var(--navy-color);
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  padding-top: 30px;
  padding-bottom: 30px;
  margin-bottom: 20px;
}
.pokemons__cardwrapper {
  margin-left: auto;
  margin-right: auto;
}
.pokemons__p {
  color: var(--green-color);
  opacity: 0.6;
}
.pokemons__p:hover {
  transition: all 0.3s ease;
  cursor: pointer;
  color: var(--green-color);
  opacity: 1;
}
.pokemons__choisewrap {
  margin-bottom: 30px;
}
.pokemons__search {
  height: var(--input-height);
  color: var(--green-color);
  border: 2px solid var(--black-color);
  outline: none;
  margin-bottom: 30px;
}
@media (max-width: 1279px) {
  .pokemons__content {
    grid-template-columns: 1fr 1fr 1fr;
  }
}
@media (max-width: 991px) {
  .pokemons__content {
    grid-template-columns: 1fr 1fr;
  }
  .pokemons__section {
    display: block;
  }
  .pokemons__create {
    margin-right: 0px;
    margin-bottom: 20px;
  }
  .pokemons__select {
    border: none;
  }
}
@media (max-width: 479px) {
  .pokemons__content {
    grid-template-columns: 1fr;
  }
}
</style>
