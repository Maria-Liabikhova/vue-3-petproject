<template>
  <div>
    <Navbar
      :title="navTitle"
      :firstLinkName="firstLinkName"
      :secondLinkName="secondLinkName"
      :firstRout="firstRout"
      :secondRout="secondRout"
    />
    <router-view></router-view>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Navbar from "@/components/shared/Navbar.vue";

export default defineComponent({
  components: { Navbar },
  name: "App",
  data() {
    return {
      navTitle: "Hello world!",
      firstLinkName: "all pokemons",
      secondLinkName: "all posts",
      firstRout: "/",
      secondRout: "/posts",
    };
  },
});
</script>
