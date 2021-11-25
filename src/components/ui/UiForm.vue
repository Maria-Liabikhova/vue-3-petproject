<template>
  <form class="form" @submit.prevent>
    <div>
      <input class="form__input" v-model.trim="value" />
    </div>
    <UiButton :button-name="buttonName" @click="onApply" />
  </form>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "UiForm",
  props: {
    buttonName: {
      type: String,
      required: true,
    },
    chosenValue: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      value: "",
    };
  },
  methods: {
    onApply() {
      this.$emit("onCreate", this.value), (this.value = "");
    },
  },
  watch: {
    chosenValue() {
      this.value = this.chosenValue;
    },
  },
});
</script>

<style scoped>
.form {
  display: grid;
  grid-column-gap: 30px;
  grid-template-columns: 30% 70%;
}
.form__input {
  box-sizing: border-box;
  padding: 7px;
  padding-left: 20px;
  margin-bottom: 10px;
  height: var(--input-height);
  width: 100%;
  display: block;
  border: 1px solid var(--green-color);
  outline: none;
  font-size: 24px;
  font-weight: bold;
}
@media (max-width: 991px) {
  .form {
    grid-template-columns: 50% calc(50% - 30px);
  }
}
</style>
