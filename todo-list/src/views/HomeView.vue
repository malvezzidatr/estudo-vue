<template>
	<div class="homeContainer">
		<div>
			<InputTodo @getNewValue = "newValue" text="Digite sua tarefa"/>
			<TodoButton newValue= text="Enviar" />
			<p>{{ newValue }}</p>
		</div>
		<TodoList tasks="" />
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useTaskStore } from '../store/tasks';
import InputTodo from '@/components/InputTodo.vue';
import TodoButton from '@/components/TodoButton.vue';
import TodoList from '@/components/TodoList.vue';

export default defineComponent({
	name: 'HomeView',
	components: {
		InputTodo,
		TodoButton,
		TodoList
	},
	setup() {
		const store = useTaskStore();
		const allTasks = store.allTasks;
		const addTask = store.addTask;
		let newValue = '';
		const getNewValue = (value: string) => {
			newValue = value;
		}

		return {
			allTasks,
			addTask,
			getNewValue,
			newValue
		}
	}
});
</script>

<style lang="less" scoped>
	.homeContainer {
		display: flex;
		align-items: center;
		flex-direction: column;
		justify-content: center;
	}
</style>