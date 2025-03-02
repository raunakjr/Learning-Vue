<template>
  <ul>
    <li v-for="x in arr" :key="x">{{ x }}</li>
  </ul>
  <ul>
    <li v-for="x in 5" :key="x">{{ x }}</li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      arr: ["c++", "java", "python", "rust"],
    };
  },
};
</script>
