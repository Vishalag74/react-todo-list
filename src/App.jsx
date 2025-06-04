import React, { useState } from 'react'

const App = () => {

  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [mainTask, setMainTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()
    setMainTask([...mainTask, { title, desc }])
    settitle("")
    setdesc("")
  }

  const deleteHandler = (i) => {
    return () => {
      let newTask = [...mainTask]
      newTask.splice(i, 1)
      setMainTask(newTask)
    }
  }

  let renderTask = <h2>No Task Available</h2>

  renderTask = mainTask.map((t, i) => {
    return (
      <li key={i} className='flex justify-between bg-slate-500 border-2 border-zinc-600 px-9 py-4 m-2'>
        <div className='text-gray-200'>
          <h2 className='text-2xl font-bold'>{t.title}</h2>
          <p className='text-xl'>{t.desc}</p>
        </div>
        <button onClick={deleteHandler(i)} className='text-lg  text-gray-200 bg-red-500 rounded p-2'>Delete</button>
      </li>
    )
  })

  if (mainTask.length === 0) {
    renderTask = <h2>No Task Available</h2>
  }

  return (
    <>
      <h1 className='bg-slate-800 m-3 text-white p-5 text-5xl font-bold text-center'>ToDo List</h1>
      <form onSubmit={submitHandler} className='mt-8 flex justify-center'>
        <input type="text" required className='text-2xl border-zinc-800 border-3 m-8 px-4 py-2' placeholder='Enter Title Here' value={title} onChange={(e) => { settitle(e.target.value) }} />
        <input type="text" className='text-2xl border-zinc-800 border-3 m-8 px-4 py-2' placeholder='Enter Description Here' value={desc} onChange={(e) => { setdesc(e.target.value) }} />
        <button className='bg-green-600 text-white p-2 m-8 font-bold rounded-sm'>Add Task</button>
      </form>
      <div className='bg-zinc-100 p-4 text-2xl font-bold text-center border-2 border-zinc-600 m-5'>
        <ul>
          {renderTask}
        </ul>
      </div>
    </>
  )
}

export default App