<template>
  <div>
    <button @click="show = !show">切り替え</button>
    <transition name="fade">
      <p v-if="show">hello</p>
    </transition>
    <transition name="slide">
      <div v-if="show">
        <p>bye</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
    };
  },
};
</script>

<style scoped>
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 2s;
}
.fade-enter-to {
  opacity: 1;
}
.fade-leave {
  opacity: 1;
}
.fade-leave-active {
  transition: opacity 2s;
}
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active {
  animation: slide-in 0.2s;
}
.slide-leave-active {
  animation: slide-in 0.2s reverse;
}

@keyframes slide-in {
  from {
    transform: translateX(100px);
  }
  to {
    transform: translateX(0);
  }
}

div {
  width: 70%;
  margin: auto;
  padding-top: 5rem;
  text-align: center;
}
</style>