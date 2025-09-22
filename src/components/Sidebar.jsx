import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const NavItem = ({to, children})=>(
  <NavLink to={to} className={({isActive})=>(
    'flex items-center gap-3 px-4 py-3 rounded-md text-sm '+(isActive? 'bg-gradient-to-r from-[#00c985] to-[#00d4ff] text-black':'text-gray-300 hover:bg-gray-800/30')
  )}>
    {children}
  </NavLink>
)

export default function Sidebar({theme, setTheme}){
  const navigate = useNavigate()
  return (
    <aside className="w-64 bg-white dark:bg-[#071019] border-r border-gray-800/20 min-h-screen p-4">
      <div className="mb-8">
        <div className="flex items-center gap-3 cursor-pointer" onClick={()=>navigate('/')}>
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#00c985] to-[#00d4ff] flex items-center justify-center text-white font-bold">M</div>
          <div>
            <div className="text-lg font-semibold text-black dark:text-white">Metalytics</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">AI for Circular Metallurgy</div>
          </div>
        </div>
      </div>

      <nav className="space-y-1">
        <NavItem to="/"><span>Dashboard</span></NavItem>
        <NavItem to="/input"><span>Input Data</span></NavItem>
        <NavItem to="/visualizations"><span>Visualizations</span></NavItem>
        <NavItem to="/scenarios"><span>Scenarios</span></NavItem>
        <NavItem to="/reports"><span>Reports</span></NavItem>
      </nav>

      <div className="mt-8 pt-6 border-t border-gray-700/20">
        <div className="text-sm text-gray-400 mb-3">Dr. Sarah Chen</div>
        <div className="flex items-center gap-3">
          <button className="px-3 py-2 rounded-md bg-gray-800/20 text-sm" onClick={()=>setTheme(theme==='dark'?'light':'dark')}>
            {theme==='dark' ? 'Light Mode' : 'Dark Mode'}
          </button>
          <button className="px-3 py-2 rounded-md bg-red-600 text-white text-sm" onClick={()=>navigate('/login')}>Logout</button>
        </div>
      </div>
    </aside>
  )
}
