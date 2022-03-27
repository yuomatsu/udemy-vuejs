<template>
  <div>
    <h1>HOMEです。。</h1>
    <button @click="doubleCounter">+</button>
    <p>{{ doubleCount }}</p>
    <p>{{ tripleCount }}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["doubleCount", "tripleCount"]),
  },
  methods: {
    doubleCounter() {
      this.$store.commit("increment", 2);
    },
  },
};
</script>