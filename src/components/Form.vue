<template>
  <h1 class="text-center mt-20">Simple Form</h1>
  <form class="flex flex-col justify-center items-center" action="">
    <label for="">Email: </label>
    <input class="border-2" type="email" v-model="form.email" />
    <br />
    <br />
    <label for="">Password: </label>
    <input class="border-2" type="Password" v-model="form.password" />
    <br />
    <br />
    <button
      @click="Login"
      class="bg-blue-200 rounded-lg px-3 py-1"
      type="button"
    >
      Login
    </button>
  </form>
</template>

<script>
export default {
  name: "Form",
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    Login() {
      console.log(this.form.email, this.form.password);
    },
  },
};
</script>
