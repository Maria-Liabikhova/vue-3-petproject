<template>
  <div class="navbar">
    <h1 class="navbar__h1">{{ title }}</h1>
    <div class="navbar__btnswrapper">
      <UiLinkBtn
        class="navbar__space"
        :linkName="firstLinkName"
        :to="firstRout"
      />
      <UiLinkBtn :linkName="secondLinkName" :to="secondRout" />
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Navbar",
  props: {
    title: {
      type: String,
    },
    firstLinkName: {
      type: String,
    },
    secondLinkName: {
      type: String,
    },
    firstRout: {
      type: String,
    },
    secondRout: {
      type: String,
    },
  },
});
</script>

<style scoped>
.navbar {
  height: 120px;
  background-color: var(--green-color);
  padding: 30px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
}
.navbar__h1 {
  color: var(--white-color);
  font-family: var(--main-font);
  font-size: 50px;
  letter-spacing: 2px;
  margin: 0;
}
.navbar__btnswrapper {
  display: flex;
  margin-left: auto;
}
.navbar__space {
  margin-right: 40px;
}
</style>
