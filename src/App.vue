<script>
import Child from "./components/Child.vue";
import ClassBinding from "./components/ClassBinding.vue";
import ConditionalRendering from "./components/ConditionalRendering.vue";
import Counter from "./components/Counter.vue";
import Form from "./components/Form.vue";
import Looping from "./components/Looping.vue";
import Ref from "./components/Ref.vue";
import TwoWayBinding from "./components/TwoWayBinding.vue";

export default {
  data() {
    return {
      arr: ["a", "b", "c", "d"],
    };
  },
  components: {
    Counter,
    TwoWayBinding,
    ConditionalRendering,
    Looping,
    Child,
    ClassBinding,
    Ref,
    Form,
  },
};
</script>

<template>
  <Counter />
  <TwoWayBinding />
  <ConditionalRendering />
  <Looping />
  <Child name="Raunak Mishra" :array1="arr" />
  <ClassBinding />
  <Ref />
  <Form />
</template>
