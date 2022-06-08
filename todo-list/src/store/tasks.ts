import { defineStore } from 'pinia';

interface ITasks {
    task: string,
    isFinished: boolean
}

export const useTaskStore = defineStore('tasks', {
    state: () => {
        return { 
            tasks: Array<ITasks>()
        }
    },
    actions: {
        addTask(task:string): void {
            this.allTasks.push({
                task,
                isFinished: false
            });
        },
        cancelTask(taskIndex:number): void {
            this.allTasks.splice(taskIndex, 1);
        },
        doneTask(taskIndex: number): void {
            this.allTasks[taskIndex].isFinished = true;
        } 
    },
    getters: {
        allTasks: (state): Array<ITasks> => state.tasks
    }
});