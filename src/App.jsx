import './App.css'
import Form from './components/Form';
import TaskList from './components/TaskList';

function App() {

  return (
    <div className="w-full h-screen bg-gray-100 p-6">
      <h2 className="w-5/6 mx-auto text-4xl font-extrabold">LKMX - Front-end</h2>
      <br />
      <div>
        <div className="w-5/6 mx-auto bg-white rounded shadow p-6">
          <h2 className="text-4xl font-extrabold">To Do List</h2>
          <br />
          <Form />
          <TaskList />
        </div>
      </div>
    </div>
  )
}

export default App
