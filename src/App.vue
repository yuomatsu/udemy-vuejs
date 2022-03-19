<template>
  <div>
    <LikeHeader>
      <template v-slot:title>
        <h2>トータルいいね数</h2>
      </template>
      <template v-slot:number>
        <p>{{ number }}</p>
      </template>
    </LikeHeader>

    <LikeNumber
      :total-number="number"
      v-on:my-click="number = $event"
    ></LikeNumber>
  </div>
</template>

<script>
import LikeHeader from "./components/LikeHeader.vue";

export default {
  data() {
    return {
      number: 14,
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

