<template>
  <button class="btn">{{ buttonName }}</button>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "UiButton",
  props: {
    buttonName: {
      type: String,
      required: true,
    },
  },
});
</script>

<style scoped>
.btn {
  height: 32px;
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
}
.btn:hover {
  cursor: pointer;
  transition: all 0.3s ease;
  transform: translateY(5px);
}
</style>
