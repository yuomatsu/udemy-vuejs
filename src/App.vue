<template>
  <div>
    <button @click="myAnimation = 'slide'">Slide</button>
    <button @click="myAnimation = 'fade'">Fade</button>
    {{ myAnimation }}
    <transition :name="myAnimation" appear>
      <p v-if="show">bye</p>
    </transition>
    <hr />
    <button @click="show = !show">切り替え</button>
    <transition
      enter-active-class="animate__animated animate__bounce"
      leave-active-class="animate__animated animate__shake"
    >
      <p v-if="show">hello</p>
    </transition>
    <transition name="slide" type="animation" apper>
      <p v-if="show">bye</p>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
      myAnimation: "slide",
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
.slide-enter,
.slide-leave-to {
  opacity: 0;
}

.slide-enter-active {
  animation: slide-in 0.5s;
  transition: opacity 0.8s;
}
.slide-leave-active {
  animation: slide-in 0.5s reverse;
  transition: opacity 0.8s;
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