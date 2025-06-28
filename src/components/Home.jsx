import { useNavigate } from 'react-router-dom'

const Home = ({ task, settask, user, setuser, inizialvalue, edit, setedit }) => {
  const navigate = useNavigate()



  const taskhandle = (e) => {
    const { name, value } = e.target
    settask(prev => ({ ...prev, [name]: value }))
  }

  const handsubmit = (e) => {
    e.preventDefault()
    if (edit === null) {
      setuser(prev => ([...prev, task]))
      settask(inizialvalue)
    }
    else {
      user[edit] = task
      setuser(user)
      settask(inizialvalue)
      setedit(null)
    }
     navigate('/Task')
  }

  const addtask = () => {
    navigate("/Home")
  }

  const taskpage = () => {
    navigate("/Task")
  }
  return (
    <>
    <div className='flex justify-center items-center w-full min-h-screen bg-purple-500'>
    <div className='w-96 h-96 bg-red-300 border border-4 shadow-sm shadow-white rounded-lg p-8 text-center'>
      <h1 className='text-3xl font-semibold mt-8'>TASK MANAGEMENT </h1>
      <div className='flex justify-center gap-4 mt-3 mb-3 '>
        <button onClick={addtask} className='text-gray-700 hover:text-gray-950'>Add Task</button>
        <button onClick={taskpage} className='text-gray-700 hover:text-gray-950'>All Task</button>
      </div>
      <div>
        <form onSubmit={handsubmit}  >
          <input type="text" placeholder='Task' onChange={taskhandle} name="task" value={task.task} className='w-full h-10 rounded-lg p-2 outline-none mb-3' required/><br />
          <input type="text" placeholder='Description' onChange={taskhandle} name="description" value={task.description} className='w-full h-10 rounded-lg p-2 outline-none mb-3' required /><br />
          <input type="date" name="date" onChange={taskhandle} value={task.date} className='w-full h-10 rounded-lg p-2 outline-none mb-3' required/><br />
          <button type='submit'  className='bg-blue-500 px-4 py-2 rounded-md text-white'>{edit === null ? "Add Task" : "Update Task"}</button>
        </form>
      </div>
      </div>
      </div>
    </>
  )
}

export default Home