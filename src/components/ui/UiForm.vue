<template>
  <form class="form" @submit.prevent>
    <div>
      <input class="form__input" v-model="value" />
    </div>
    <UiButton :button-name="buttonName" @click="$emit('onCreate', value)" />
  </form>
</template>

<script>
import { defineComponent } from "vue";
import UiButton from "@/components/ui/UiButton.vue";

export default defineComponent({
  name: "UiForm",
  components: { UiButton },
  props: {
    buttonName: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      value: "",
      // secondValue: "",
    };
  },
});
</script>

<style scoped>
.form {
  margin-bottom: 45px;
  display: grid;
  grid-column-gap: 30px;
  grid-template-columns: 30% calc(70% - 30px);
}
.form__input {
  margin-bottom: 10px;
  height: 25px;
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
