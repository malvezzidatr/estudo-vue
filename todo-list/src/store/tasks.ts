import { defineStore } from 'pinia';

interface ITasks {
    task: string,
    isFinished: boolean
}

export const useTaskStore = defineStore('tasks', {
    state: () => {
        return { tasks: Array<ITasks>()
        }
    },
    actions: {
        addTask(task:string) {
            this.tasks.push({
                task,
                isFinished: false
            });
        }
    },
    getters: {
        allTasks: (state) => state.tasks
    }
});