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

  let renderTask = <h2 className='text-center text-gray-500 text-xl mt-4'>No Task Available</h2>

  renderTask = mainTask.map((t, i) => {
    return (
      <li key={i} className='flex flex-col sm:flex-row justify-between items-center bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 border-2 border-purple-700 px-6 py-4 m-2 rounded-lg shadow-lg text-white'>
        <div className='mb-3 sm:mb-0 flex-1'>
          <h2 className='text-2xl font-semibold'>{t.title}</h2>
          <p className='text-lg sm:text-xl'>{t.desc}</p>
        </div>
        <button onClick={deleteHandler(i)} className='text-lg bg-indigo-50 text-red-600 hover:bg-red-100 transition-colors rounded-lg px-4 py-2 shadow-md'>Delete</button>
      </li>
    )
  })

  if (mainTask.length === 0) {
    renderTask = <h2 className='text-center text-purple-900 text-xl mt-4'>No Task Available</h2>
  }

  return (
    <div className='min-h-screen bg-indigo-200 flex flex-col items-center py-10 px-4'>
      <h1 className='bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 text-white px-8 py-5 text-4xl sm:text-5xl font-extrabold rounded-xl shadow-lg w-full max-w-4xl text-center mb-8'>
        ToDo List
      </h1>
      <form onSubmit={submitHandler} className='mt-4 flex flex-col sm:flex-row justify-center items-center gap-4 w-full max-w-4xl'>
        <input
          type="text"
          required
          className='text-xl sm:text-2xl border border-purple-700 rounded-lg px-4 py-3 w-full sm:w-auto focus:outline-none focus:ring-4 focus:ring-purple-300 bg-indigo-50 placeholder-gray-500 text-purple-900'
          placeholder='Enter Title Here'
          value={title}
          onChange={(e) => { settitle(e.target.value) }}
        />
        <input
          type="text"
          className='text-xl sm:text-2xl border border-purple-700 rounded-lg px-4 py-3 w-full sm:w-auto focus:outline-none focus:ring-4 focus:ring-purple-300 bg-indigo-50 placeholder-gray-500 text-purple-900'
          placeholder='Enter Description Here'
          value={desc}
          onChange={(e) => { setdesc(e.target.value) }}
        />
        <button className='bg-purple-700 hover:bg-purple-800 text-white p-3 font-bold rounded-lg w-full sm:w-auto transition-colors shadow-md'>
          Add Task
        </button>
      </form>
      <div className='bg-indigo-50 p-6 text-2xl font-semibold text-center border-2 border-purple-700 mt-8 rounded-lg shadow-inner w-full max-w-4xl'>
        <ul>
          {renderTask}
        </ul>
      </div>
    </div>
  )
}

export default App
