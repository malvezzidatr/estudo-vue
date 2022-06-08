<template>
	<div class="todo__list">
		<div
			:class="{ 'todo__list-todo--progress': !item.isFinished, 'todo__list-todo--finished': item.isFinished }"
			:key="index" v-for="(item, index) in allTasks"
			class="todo__list-todo"
		>
			<p class="todo__list-todo--status" >
				{{ item.isFinished ? 'Concluido' : 'Em progresso' }}
			</p>
			<p class="todo__list-todo--task">{{ item.task }}</p>
			<div class="todo__list-todo--done">
				<button :disabled="item.isFinished" @click="doneTask(index)">Concluido</button>
				<button :disabled="item.isFinished" @click="cancelTask(index)">Cancelar</button>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useTaskStore } from '@/store/tasks';

export default defineComponent({
	name: 'TodoList',
	setup() {
		const store = useTaskStore();
		const allTasks = store.allTasks;

		const doneTask = (taskIndex: number): void => {
			console.log(store)
			store.doneTask(taskIndex);
		}

		const cancelTask = (taskIndex: number): void => {
			store.cancelTask(taskIndex);
		}

		return {
			allTasks,
			doneTask,
			cancelTask
		}
	}
});
</script>

<style scoped lang="less">
	.todo__list {
		width: 70vw;
		height: 70vh;
		margin-top: 20px;

		&-todo {
			display: flex;
			flex: 4;
			justify-content: space-around;
			align-items: center;
			width: 100%;
			height: 180px;
			background-color: #fafafa;
			border-radius: 8px;
			margin-bottom: 10px;

			&--progress {
				background-color: #1fa0ff;
			}

			&--finished {
				background-color: #7dcf00;
			}

			&--status, &--task, &--done {
				display: flex;
				align-items: center;
				justify-content: center;
				font-weight: bold;
				font-size: 18px;
			}

			&--status {
				height: 100%;
				flex: 1;
				
			}

			&--task {
				flex: 2;
				height: 100%;
			}

			&--done {
				flex-direction: column;
				flex: 1;
				height: 100%;

				button {
					width: 140px;
					height: 50px;
					margin: 10px;
					cursor: pointer;
					border: unset;
					border-radius: 10px;
				}

				button:disabled {
					border: unset !important;
				}

				button:hover {
					border: 1px solid black;
				}
			}
		}
	}
</style>
