<template>
  <input class="border-1 rounded-lg mt-20 mb-5" type="text" ref="abc" />
  <button class="bg-blue-200 rounded-lg ml-10 px-10" @click="getData">
    Click
  </button>
  <h1 class="inline mx-20">{{ InputData }}</h1>
</template>
<script>
export default {
  name: "Home",
  data() {
    return {
      InputData: "xyz",
    };
  },
  methods: {
    getData() {
      this.$refs.abc.focus();
      this.InputData = this.$refs.abc.value;
      this.$refs.abc.style.color = "red";
    },
  },
};
</script>
