<template>
  <h1>{{ ReverseString }}</h1>
</template>
<script>
export default {
  data() {
    return {
      message: "Hii this is Raunak",
      arr: [2, 3, 4, 5],
    };
  },
  computed: {
    ReverseString() {
      return this.message.split(" ").reverse().join(" ");
    },
  },
};
</script>
