<script>
import Child from "./components/Child.vue";
import ClassBinding from "./components/ClassBinding.vue";
import Computing from "./components/Computing.vue";
import ConditionalRendering from "./components/ConditionalRendering.vue";
import Counter from "./components/Counter.vue";
import Form from "./components/Form.vue";
import Looping from "./components/Looping.vue";
import Ref from "./components/Ref.vue";
import TwoWayBinding from "./components/TwoWayBinding.vue";
import Watchers from "./components/Watchers.vue";

export default {
  data() {
    return {
      arr: ["a", "b", "c", "d"],
      tab: "Counter",
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
    Computing,
    Watchers,
  },
};
</script>

<template>
  <!-- <button class="mx-10" @click="this.tab = 'Form'">Form</button>
  <button class="mx-10" @click="this.tab = 'Ref'">Ref</button>
  <button class="mx-10" @click="this.tab = 'Looping'">Looping</button> -->
  <!-- <Counter />
  <TwoWayBinding />
  <ConditionalRendering />
  <Looping />
  <Child name="Raunak Mishra" :array1="arr" />
  <ClassBinding />
  <Ref />
  <Form />
  <Computing />
  <Watchers>
    <h1>Hi this is html passed</h1>
    <template v-slot:header>
      <button>Buy Now</button>
      <h1>This is Named Slot</h1>
    </template>
  </Watchers> -->
  <router-link to="/loop/raunak"> Loop</router-link>
  <router-view></router-view>
</template>
