<template>
  <div v-if="flag">
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat illum
      laudantium harum doloremque quidem ut numquam iure velit nobis labore,
      consequuntur, optio quod consequatur dolorem repellendus consectetur eius
      ea. Explicabo?
    </p>
  </div>
  <button
    class="border-2 rounded-lg bg-blue-300 px-5 py-2 mt-10"
    @click="handleClick"
  >
    {{ flag ? "hide" : "show" }}
  </button>
</template>
<script>
export default {
  data() {
    return {
      flag: 1,
    };
  },
  methods: {
    handleClick() {
      this.flag = !this.flag;
    },
  },
};
</script>
