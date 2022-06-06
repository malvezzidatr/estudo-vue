<template>
  <input @change="newValueEmit($event.target.value)" class="task" type="Text" :placeholder="text" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'InputTodo',
    props: {
        text: {
            type: String,
            required: true
        }
    },
    emits: ['getNewValue'],
    setup(props, { emit }) {
        const newValueEmit = (value: string) => {
            emit('getNewValue', value);
        }
        return {
            newValueEmit
        }
    }
});
</script>

<style scoped lang="less">
  .task {
    width: 600px;
    height: 50px;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    outline: 0;
    border: 2px solid #bcbcbc;
    font-size: 18px;
    color: #101010;
  }
</style>
