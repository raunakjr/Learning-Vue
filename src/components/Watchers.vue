<template>
  <!-- this slot get all data by default -->

  <slot name="header"></slot>
  <h1>{{ count }}</h1>
  <br />
  <button @click="count++">+</button>
  <br />

  <button @click="count--">-</button>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
  watch: {
    count(val, prev) {
      alert(`this is triggered when count changes ${val}`);
    },
  },
};
</script>
