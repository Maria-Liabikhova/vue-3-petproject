<template>
  <div class="pokemon">
    <h2>...I am here to save you</h2>
    <div class="pokemon__img-wrapper">
      <img
        class="pokemon__img"
        :src="`https://img.pokemondb.net/artwork/${$route.params.name}.jpg`"
        :alt="`${imgAlt} image`"
      />
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Pokemon",
  mounted() {
    console.log("hhh", this.$route.params.name);
  },
});
</script>
<style scoped>
.pokemon {
  padding: 30px;
}
.pokemon__img-wrapper {
  display: flex;
  height: 220px;
  object-fit: contain;
  overflow: hidden;
}
</style>
