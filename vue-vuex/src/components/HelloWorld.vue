<template>
  <div class="helloworld">
    <h1 class="counter">count : {{ counter }}</h1>
    <button class="increment" @click="increments">Aumentar o contador</button>
    <button class="decrement" @click="decrements">diminuir o contador</button>
  </div>
</template>

<script>
import { computed, defineComponent } from "vue";
import { useStore } from "@/store";

export default defineComponent({
  name: "HelloWorld",
  setup() {
    const store = useStore();
    const counter = computed(() => store.getters.count);
    const increments = () => store.dispatch("increments");
    const decrements = () => store.dispatch("decrements");
    return {
      counter,
      increments,
      decrements,
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped></style>
