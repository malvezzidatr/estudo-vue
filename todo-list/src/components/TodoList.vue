<template>
	<div class="todo__list">
		<div class="todo__list-todo">
			<p class="todo__list-todo--status">Inicializada</p>
			<p class="todo__list-todo--task">Task em si</p>
			<div class="todo__list-todo--done">
				<button>Concluido</button>
				<button>Cancelar</button>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'TodoList',
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
			border-top-left-radius: 8px;
			border-top-right-radius: 8px;
			border-bottom: 2px solid #bcbcbc;

			&--status, &--task, &--done {
				display: flex;
				align-items: center;
				justify-content: center;
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
				}
			}
		}
	}
</style>
