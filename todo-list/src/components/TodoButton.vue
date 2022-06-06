<template>
	<button class="todoButton">{{ text }}</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'TodoButton',
	props: {
		text: {
			type: String,
			required: true
		}
	},
	emits: ['addTask', 'task'],
	setup(props, { emit }) {
		const addTask = () => emit('addTask')
		console.log(addTask)
	}
});
</script>

<style scoped lang="less">
    .todoButton {
        height: 56px;
        width: 120px;
        border: 2px solid #bcbcbc;
        background-color: #1fa0ff;
        font-size: 18px;
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
        cursor: pointer;
    }
</style>
