<template>
  <div class="flex flex-col items-center justify-centers mt-10">
    <input v-model="count" class="border-2 mb-5" type="text" />
    <h1>{{ count }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 6,
    };
  },
};
</script>
