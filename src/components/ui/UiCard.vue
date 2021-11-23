<template>
  <div class="card">
    <div class="card__header">
      <h2 class="card__title">{{ titleFirst }}</h2>
      <div class="card__img-wrapper">
        <img class="card__img" :src="imgSrc" :alt="`${imgAlt} image`" />
      </div>
    </div>
    <p class="card__text">{{ text }}</p>
    <div>
      <h2 class="card__title">{{ titleSecond }}</h2>
      <a :href="link" class="card__link">{{ linkName }}</a>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "UiCard",
  props: {
    titleFirst: {
      type: String,
      required: false,
    },
    titleSecond: {
      type: String,
      required: false,
    },
    text: {
      type: String,
      required: false,
    },
    link: {
      type: String,
      required: false,
    },
    imgSrc: {
      type: String,
      required: false,
    },
    imgAlt: {
      type: String,
      required: false,
    },
    linkName: {
      type: String,
      required: false,
    },
  },
});
</script>

<style scoped>
.card {
  border: 1px solid var(--green-color);
  padding: 20px;
  width: 200px;
}
.card__title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 7px;
}
.card__text {
  font-weight: bold;
  color: var(--green-color);
  font-family: var(--main-font);
  font-size: 25px;
  letter-spacing: 0.7px;
  margin-top: 0;
}
.card__img-wrapper {
  display: flex;
  height: 120px;
  object-fit: contain;
  overflow: hidden;
}
.card__img {
  height: 100%;
  width: 100%;
}
.card__header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}
.card__link {
  color: var(--green-color);
  font-weight: bold;
  text-decoration: none;
  opacity: 0.6;
  transition: all 0.3s ease;
}
.card__link:hover {
  transition: all 0.3s ease;
  opacity: 1;
}
</style>
