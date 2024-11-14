import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Main from './pages/Main'
import Upload from './pages/Upload'

const App = () => {
  return (
    <div className='overflow-x-hidden text-[#E6E6D9] antialiased'>
      <div className="fixed inset-0 -z-10">
      <div class="relative h-full w-full bg-slate-950"><div class="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]"></div></div>
      </div>
      <div className="container mx-auto px-8">
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />}/>
          <Route path="/upload" element={<Upload />}/>
        </Routes>
        
      </div>
    </div>
  )
}

export default App