<template>
  <div :class="{ 'bg-red-300 text-2xl': colorful }">
    <h1>Hii this is ME</h1>
    <p>Raunak Mishra</p>
    <p>Age:20</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      colorful: true,
    };
  },
  computed: {
    applyStyle() {},
  },
};
</script>
