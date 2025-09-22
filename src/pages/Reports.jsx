import React from 'react'

export default function Reports(){
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 text-black dark:text-white">Sustainability Report</h1>
      <div className="bg-white dark:bg-[#0e1416] p-6 rounded-xl">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="font-semibold">Executive Summary</h2>
            <p className="text-sm text-gray-400">Life Cycle Assessment Report - Aluminum Recycling Process Optimization</p>
            <ul className="mt-4 text-sm space-y-2">
              <li>Material: Aluminum</li>
              <li>Analysis Date: 2025-01-22</li>
              <li>Recycled Content: 70%</li>
            </ul>
          </div>
          <div className="text-center">
            <div className="w-28 h-28 rounded-full bg-black/10 dark:bg-black/20 flex items-center justify-center text-2xl font-bold">78</div>
            <div className="text-sm text-gray-400 mt-2">Overall Sustainability Score</div>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-black/5 dark:bg-black/20 rounded-md">CO₂ Emissions<br/><strong>4.3 kg/tonne</strong></div>
          <div className="p-4 bg-black/5 dark:bg-black/20 rounded-md">Energy Use<br/><strong>8.7 MWh/tonne</strong></div>
          <div className="p-4 bg-black/5 dark:bg-black/20 rounded-md">Water Use<br/><strong>680 L/tonne</strong></div>
        </div>
      </div>
    </div>
  )
}
