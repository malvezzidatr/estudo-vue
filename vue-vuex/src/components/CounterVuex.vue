<template>
  <h4>{{ count }}</h4>
  <button class="btn btn-success" @click="inc">increment (vuex)</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { computed } from "@vue/reactivity";
import { useStore } from "vuex";

export default defineComponent({
  name: "CounterVuex",
  props: {
    by: {
      type: Number,
      default: 1,
    },
  },
  setup(props: any) {
    const store = useStore();
    const count = computed(() => store.state.count);
    const inc = () => store.commit("INC", props.by);
    return { count, inc };
  },
});
</script>
