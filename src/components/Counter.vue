<template>
  <div class="w-full h-screen flex flex-col items-center justify-center gap-5">
    <h1 class="text-3xl">Counter</h1>
    <!-- <p v-bind:class="customClass">{{ count }}</p> -->

    <!-- // when isActive is true hidden class will be applied by default -->
    <!-- <p :class="{ hidden: isActive }">{{ count }}</p> -->
    <p class="text-3xl text-yellow-900" :class="{ customClass: isActive }">
      {{ count }}
    </p>
    <button
      @click="Increment"
      class="bg-slate-300 px-3 py-2 rounded-lg w-fit cursor-pointer"
    >
      Increase
    </button>
    <button
      @click="Decrement"
      class="bg-slate-300 px-3 py-2 rounded-lg w-fit cursor-pointer"
    >
      Decrease
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 2,
      isActive: false,
    };
  },
  methods: {
    Increment() {
      this.count++;
    },
    Decrement() {
      this.count--;
    },
  },
};
</script>

<style>
.customClass {
  background-color: aqua;
}
</style>
