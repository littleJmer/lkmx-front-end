import Task from './Task';
import { useTaskStore } from '../store'

export default () => {
    const { tasks } = useTaskStore();
    return (
        <div className="bg-gray-100 p-6 rounded my-6">
            {tasks?.length === 0 && (
                <p className="text-xl text-gray-500 font-semibold">No has agregado tareas</p>
            )}
            {tasks?.map((task, key) => <Task key={`task-${key}`} task={task} />)}
        </div>
    )
}