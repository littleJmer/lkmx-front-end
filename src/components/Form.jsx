import { useTaskStore } from '../store'

export default () => {
    const {addTask } = useTaskStore();

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    addTask({ uuid: new Date().valueOf(), text: formData.get('text') });
    e.target.reset()
  }
    return (
        <form className="flex items-center" onSubmit={onSubmit}>
            <input name='text' type="text" className="mr-2.5 bg-gray-50 border border-gray-300 rounded w-full p-2.5" placeholder="Escribe una tarea" required />
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 rounded w-auto px-5 py-2.5">Agregar</button>
        </form>
    )
}