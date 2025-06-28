import { useNavigate } from 'react-router-dom'
import {useEffect} from 'react'

export const Task = ({ settask, user, setedit, setuser }) => {

  const navigate = useNavigate()

  const uselength = user.length
  useEffect(()=>{
    if(user.length<=0){
       navigate("/Home")
    }
  },[user])
  const addtask = () => {
    navigate("/Home")
  }

  const taskpage = () => {
    navigate("/Task")
  }

  const edit = (index) => {
    setedit(index)
    settask(user[index])
    navigate("/Home")
  }

  const deleted = (index) => {
    user.splice(index, 1)
    setuser([...user])
  }
  return (
    <>
        <div className='flex justify-center items-center w-full min-h-screen bg-purple-500'>
    <div className='w-full min-h-96 bg-red-300 border border-4 shadow-sm shadow-white rounded-lg m-8 p-8 text-center'>

      <h1 className='text-3xl font-semibold mt-4'>TASK MANAGEMENT</h1>
      <div className='flex justify-center gap-4 mt-3 mb-3 '>
        <button onClick={addtask} className='text-gray-700 hover:text-gray-950'>Add Task</button>
        <button onClick={taskpage} className='text-gray-700 hover:text-gray-950'>All Task</button>
      </div>
      <table className='w-full border border-gray-800'>
        <thead>
          <tr className='bg-gray-500 border border-black'>
            <th className='border border-gray-800 p-2'>S.no</th>
            <th className='border border-gray-800 p-2'>Task</th>
            <th className='border border-gray-800 p-2'>Description</th>
            <th className='border border-gray-800 p-2'>Date</th>
            <th className='border border-gray-800 p-2'>Action</th>
          </tr>
        </thead>
        <tbody>
          {user.map((data, index) => (
            <tr key={index}>
              <td className='border border-gray-800 p-2'>{index+1}</td>
              <td className='border border-gray-800 p-2'>{data.task}</td>
              <td className='border border-gray-800 p-2'>{data.description}</td>
              <td className='border border-gray-800 p-2'>{data.date}</td>
              <td className='border border-gray-800 p-2'>
                <button onClick={() => { edit(index) }}>Edit</button>
                <button onClick={() => { deleted(index) }}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      </div>
    </>
  )
}
export default Task;