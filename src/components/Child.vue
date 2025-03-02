<template>
  <h2>CHild Component</h2>
  <h1>{{ name }}</h1>
  <h1>{{ array1 }}</h1>
</template>
<script>
export default {
  name: "Child",
  props: {
    name: String,
    array1: Object,
  },
};
</script>

<!-- props	Allows data flow from parent to child
name="Raunak Mishra"	Static prop passing
:name="userName"	Dynamic prop binding
{ name: String }	Ensures correct prop type -->
<!-- <template>
    <Child :name="userName" />
  </template>
  
  <script>
  export default {
    data() {
      return {
        userName: "Raunak Mishra",
      };
    },
  };
  </script> -->
