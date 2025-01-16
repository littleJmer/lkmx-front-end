import react, { useState } from 'react';
import TaskEdit from './TaskEdit'
import { useTaskStore } from './../store'

export default (props) => {
    const { task = {} } = props;

    const [editing, setEdit] = useState(false);

    const { deleteTask, updateTask } = useTaskStore();

    const onSave = (taskUpdated) => {
        updateTask(taskUpdated);
        setEdit(false)
    }

    const onDelete = () => {
        deleteTask(task.uuid);
    }

    if (editing) return <TaskEdit task={task} onSave={onSave} />

    return (
        <div className="flex items-center my-5">
            <p className="text-2xl w-full">🔵 {task.text}</p>
            <button onClick={() => setEdit(true)} className="mr-2.5 bg-slate-50 hover:bg-slate-200 border border-gray-300 rounded w-auto px-5 py-2.5">
                <img src="/icon-pen.svg" alt="Editar" width={32} />
            </button>
            <button onClick={onDelete} className="bg-slate-50 hover:bg-slate-200 border border-gray-300 rounded w-auto px-5 py-2.5">
                <img src="/icon-trash.svg" alt="Editar" width={32} />
            </button>
        </div>
    )
}