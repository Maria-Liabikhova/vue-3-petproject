<template>
  <router-link class="link">{{ linkName }}</router-link>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "UiLinkBtn",
  props: {
    linkName: {
      type: String,
      required: true,
    },
  },
});
</script>

<style scoped>
.link {
  height: var(--input-height);
  width: 102px;
  text-transform: uppercase;
  font-weight: bold;
  color: var(--green-color);
  font-family: var(--main-font);
  font-size: 15px;
  letter-spacing: 0.7px;
  margin-top: 0;
  border: 3px solid var(--navy-color);
  background-color: var(--white-color);
  transition: all 0.3s ease;
  text-decoration: none;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
}
.link:hover {
  transition: all 0.3s ease;
  transform: translateY(5px);
  /* text-decoration: none; */
}
</style>
