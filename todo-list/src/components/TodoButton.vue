<template>
	<button @click="addTask" class="todoButton">{{ text }}</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useTaskStore } from '../store/tasks';

export default defineComponent({
	name: 'TodoButton',
	props: {
		text: {
			type: String,
			required: true
		},
		newValue: {
			type: String,
			required: false
		}
	},
	emits: ['addTask'],
	setup(props, { emit }) {
		const store = useTaskStore();
		const addTask = () => {
			emit('addTask')
		}
		return {
			addTask
		}
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
