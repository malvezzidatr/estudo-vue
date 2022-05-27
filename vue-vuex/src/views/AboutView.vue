<template>
  <div class="about">
    <counter-vuex />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CounterVuex from "@/components/CounterVuex.vue";

export default defineComponent({
  name: "AboutView",
  components: {
    CounterVuex,
  },
});
</script>
