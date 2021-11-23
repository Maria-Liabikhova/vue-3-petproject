<template>
  <div class="main-page">
    <h1 class="main-page__h1">Hello world!</h1>
    <UiForm :button-name="buttonName" @onCreate="create" />
    <div class="main-page__content">
      <div
        class="main-page__cardwrapper"
        v-for="pokemon in pokemons"
        :key="pokemon.id"
      >
        <UiCard
          :titleFirst="titleFirst"
          :titleSecond="titleSecond"
          :text="pokemon.name.toUpperCase()"
          :imgSrc="`https://img.pokemondb.net/artwork/${pokemon.name}.jpg`"
          :link="`https://www.pokemon.com/us/pokedex//${pokemon.name}`"
          :imgAlt="imgAlt"
          :linkName="pokemon.name + ' ' + 'invite you to it`s page'"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { mapActions, mapState } from "vuex";
import UiCard from "@/components/ui/UiCard.vue";
import UiForm from "@/components/ui/UiForm.vue";

export default defineComponent({
  name: "MainPage",
  components: { UiCard, UiForm },
  data() {
    return {
      titleFirst: "Name:",
      titleSecond: "Link:",
      imgAlt: "pokemon",
      buttonName: "Create",
    };
  },
  computed: {
    ...mapState("pokemons", ["pokemons"]),
  },
  methods: {
    ...mapActions("pokemons", ["fetchPokemons", "addPokemon"]),
    create(name) {
      let pokemon = {
        id: Date.now(),
        name: name.toLowerCase(),
      };
      this.addPokemon(pokemon);
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
.main-page__content {
  border: 3px solid var(--navy-color);
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  padding-top: 30px;
  padding-bottom: 30px;
}
.main-page__cardwrapper {
  margin-left: auto;
  margin-right: auto;
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
}
@media (max-width: 479px) {
  .main-page__content {
    grid-template-columns: 1fr;
  }
}
</style>
