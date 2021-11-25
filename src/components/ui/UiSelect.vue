<template>
  <div>
    <h2 class="select__h2">{{ title }}</h2>
    <select class="select" @change="onSelect">
      <option value="">Choose an option</option>
      <option v-for="option in options" :key="option.id" :value="option.name">
        {{ option.title }}
      </option>
    </select>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "UiSelect",
  props: {
    options: {
      type: Array,
      requred: true,
    },
    title: {
      type: String,
      requred: true,
    },
  },
  methods: {
    onSelect(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
});
</script>

<style scoped>
.select {
  height: var(--input-height);
  color: var(--green-color);
  border-color: var(--green-color);
}
.select__h2 {
  margin-top: 0;
  text-transform: uppercase;
  font-weight: bold;
  color: var(--green-color);
  font-family: var(--main-font);
  font-size: 15px;
  letter-spacing: 0.7px;
  opacity: 0.6;
}
</style>
