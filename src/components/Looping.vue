<template>
  <ul>
    <li v-for="x in arr" :key="x">{{ x }}</li>
  </ul>
  <ul>
    <li v-for="x in 5" :key="x">{{ x }}</li>
  </ul>
</template>

<script>
import { useRoute } from "vue-router";
export default {
  mounted() {
    const route = useRoute();
    console.log(route.params);
  },
  data() {
    return {
      arr: ["c++", "java", "python", "rust"],
    };
  },
};
</script>
