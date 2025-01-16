import { create } from 'zustand';

export const useTaskStore = create((set) => ({
    tasks: [],

    addTask: (task) => set(state => ({ tasks: [...state.tasks, task] })),

    deleteTask: (uuid) => set(state => {
        const tasks = [...state.tasks];
        const index = tasks.findIndex(e => e.uuid === uuid);
        if (index !== -1) tasks.splice(index, 1)
        return { tasks }
    }),

    updateTask: (task) => set(state => {
        const tasks = [...state.tasks];
        const index = tasks.findIndex(e => e.uuid === task.uuid);
        if (index !== -1) {
            tasks[index].text = task.text;
        }
        return { tasks }
    })

}))