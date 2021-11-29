<template>
  <div class="loader">
    <div class="loader__ring">
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Loading",
});
</script>

<style scoped>
.loader {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
}
.loader__ring {
  display: inline-block;
  position: relative;
  width: 70px;
  height: 70px;
}
.loader__ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 46px;
  height: 46px;
  margin: 2px;
  border: 3px solid var(--green-color);
  border-radius: 46px;
  animation: loader__ring 1.4s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: var(--green-color) transparent transparent transparent;
}
.loader__ring div:nth-child(1) {
  animation-delay: -0.45s;
}
.loader__ring div:nth-child(2) {
  animation-delay: -0.35s;
  opacity: 0.95;
}
.loader__ring div:nth-child(3) {
  animation-delay: -0.25s;
  opacity: 0.9;
}
@keyframes loader__ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
