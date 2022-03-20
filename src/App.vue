<template>
  <div>
    <LikeHeader>
      <h3>はじめまして</h3>
    </LikeHeader>

    <LikeNumber
      :total-number="number"
      v-on:my-click="number = $event"
    ></LikeNumber>
    <button @click="currentComponent = 'Home'">Home</button>
    <button @click="currentComponent = 'About'">About</button>
    <component :is="currentComponent"></component>
  </div>
</template>

<script>
import LikeHeader from "./components/LikeHeader.vue";

import About from "./components/About.vue";
import Home from "./components/Home.vue";

export default {
  data() {
    return {
      number: 14,
      currentComponent: "Home",
    };
  },
  components: {
    LikeHeader,
  },
};
</script>

<style scoped>
div {
  border: 1px solid red;
}
</style>

