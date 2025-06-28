import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './components/Home.jsx'
import Task from './components/Task.jsx'
function App() {

  const inizialvalue = {
    task: "",
    description: "",
    date: ""
  }

  const [user, setuser] = useState([])
  const [edit, setedit] = useState(null)
  const [task, settask] = useState(inizialvalue)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/Home' element={<Home task={task} settask={settask} user={user} setuser={setuser} inizialvalue={inizialvalue} edit={edit} setedit={setedit} />} />
          <Route path='/Task' element={<Task user={user} setedit={setedit} settask={settask} setuser={setuser} />} />
          <Route path='*' element={<Navigate to={'/Home'} />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
