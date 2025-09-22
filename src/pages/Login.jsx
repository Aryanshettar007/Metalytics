import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login(){
  const navigate = useNavigate()
  return (
    <div className="max-w-4xl mx-auto mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
      <div>
        <div className="rounded-xl overflow-hidden">
          <img src="https://images.unsplash.com/photo-1542131596-60f8f89fbf4b?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=dummy" alt="industrial" className="w-full h-72 object-cover" />
        </div>
        <div className="mt-6 text-gray-400">Sustainable metallurgy powered by AI</div>
      </div>

      <div className="bg-white dark:bg-[#0e1416] p-8 rounded-xl">
        <div className="mb-4">
          <div className="text-lg font-semibold">Login</div>
        </div>
        <label className="text-sm text-gray-400">Email</label>
        <input className="w-full p-3 rounded-md my-2 bg-gray-50 dark:bg-[#081116]" placeholder="Enter your email" />
        <label className="text-sm text-gray-400">Password</label>
        <input type="password" className="w-full p-3 rounded-md my-2 bg-gray-50 dark:bg-[#081116]" placeholder="Enter your password" />
        <button onClick={()=>navigate('/')} className="mt-4 w-full py-3 rounded-md bg-gradient-to-r from-[#00c985] to-[#00d4ff] text-black">Sign In</button>
      </div>
    </div>
  )
}
