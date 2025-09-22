import React, {useEffect, useState} from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Dashboard'
import InputData from './pages/InputData'
import Visualizations from './pages/Visualizations'
import Scenarios from './pages/Scenarios'
import Reports from './pages/Reports'
import Login from './pages/Login'

export default function App(){
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark')
  useEffect(()=>{
    const root = document.documentElement
    if(theme === 'dark') root.classList.add('dark')
    else root.classList.remove('dark')
    localStorage.setItem('theme', theme)
  },[theme])

  return (
    <div className="min-h-screen flex bg-white dark:bg-[#071019]">
      <Sidebar theme={theme} setTheme={setTheme} />
      <main className="flex-1 p-6">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/input" element={<InputData />} />
          <Route path="/visualizations" element={<Visualizations />} />
          <Route path="/scenarios" element={<Scenarios />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
    </div>
  )
}
