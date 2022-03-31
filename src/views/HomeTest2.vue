<template>
  <div>
    <h1>HOMEです。。</h1>
    <button @click="increment(4)">+</button>
    <p>{{ doubleCount }}</p>
    <p>{{ tripleCount }}</p>
    <input type="text" v-model="message" />
    <p>{{ message }}</p>
    <p>{{ title | upperCase }}</p>
    <p>{{ title | lowerCase }}</p>
    <p>{{ title | lowerCase | upperCase }}</p>
    <hr />
    <CountNumber></CountNumber>
  </div>
</template>

<script>
import CountNumber from "./CountNumber.vue";
import { mapActions } from "vuex";
import { mapGetters } from "vuex";
// import { mapMutations } from "vuex";


import { tokyoNumber } from "@/tokyoNumber";

export default {
	mixins: [tokyoNumber],
	components: {
		CountNumber
	},
  computed: {
    ...mapGetters("count", ["doubleCount", "tripleCount"]),
    // mapGettersを利用しない場合
    // doubleCount() {
    // 	return this.$store.getters["count/doubleCount"];
    // },
    // tripleCount() {
    // 	return this.$store.getters["count/tripleCount"];
    // },
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