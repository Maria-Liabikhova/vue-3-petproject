<template>
  <div>HELLO</div>
</template>

<script>
import { defineComponent } from "vue";
import { mapActions, mapGetters } from "vuex";

export default defineComponent({
  name: "MainPage",
  computed: {
    ...mapGetters("pokemons", ["getPokemons"]),
  },
  methods: {
    ...mapActions("pokemons", ["fetchPokemons"]),
  },
  mounted() {
    this.fetchPokemons();
  },
});
</script>
