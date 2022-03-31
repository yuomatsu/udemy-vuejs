<template>
  <div>
    <h1>CountNumberです。。</h1>
    <button @click="increment(4)">+</button>
    <p>{{ doubleCount }}</p>
    <p>{{ tripleCount }}</p>
    <input type="text" v-model="message" />
    <p>{{ message }}</p>
    <p>{{ title | upperCase }}</p>
    <p>{{ title | lowerCase }}</p>
    <p>{{ title | lowerCase | upperCase }}</p>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { mapGetters } from "vuex";

import { tokyoNumber } from "@/tokyoNumber";

export default {
  mixins: [tokyoNumber],
  computed: {
    ...mapGetters("count", ["doubleCount", "tripleCount"]),
    message: {
      get() {
        return this.$store.getters.message;
      },
      set(value) {
        this.$store.dispatch("updateMessage", value);
      },
    },
  },
  methods: {
    // ...mapMutations(["increment"]),
    ...mapActions("count", ["increment"]),
  },
};
</script>