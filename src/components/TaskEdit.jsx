import react, { useState } from 'react';

export default (props) => {
    const { task, onSave } = props;

    const onSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        const newValues = {
            ...task,
            text: formData.get("text")
        };

        onSave(newValues);
    }

    return (
        <form className="flex items-center my-5" onSubmit={onSubmit}>
            <input defaultValue={task.text ?? ""} name="text" required={true} type="text" className="mr-5 bg-gray-50 border border-gray-300 rounded w-full p-2.5" placeholder=".." />
            <button type="submit" className="text-white bg-slate-50 hover:bg-slate-200 border border-gray-300 rounded w-auto px-5 py-2.5">
                <img src="/icon-disk.svg" alt="Editar" width={32} />
            </button>
        </form>
    )
}