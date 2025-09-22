import React from 'react'

export default function Visualizations(){
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 text-black dark:text-white">Impact Visualizations</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-[#0e1416] p-6 rounded-xl h-96">
          <div className="text-sm text-gray-400 mb-3">CO₂ Emissions by Stage</div>
          <div className="h-72 flex items-center justify-center text-gray-500">[Bar chart placeholder]</div>
        </div>

        <div className="bg-white dark:bg-[#0e1416] p-6 rounded-xl">
          <div className="text-sm text-gray-400 mb-3">Impact Reduction Summary</div>
          <ul className="space-y-3">
            <li className="p-3 bg-black/5 dark:bg-black/20 rounded-md">CO₂ Emissions: Virgin 25.8 kg → Recycled 4.3 kg <span className="text-green-400 float-right">-83.3%</span></li>
            <li className="p-3 bg-black/5 dark:bg-black/20 rounded-md">Energy Use: Virgin 45.2 MWh → Recycled 8.7 MWh <span className="text-green-400 float-right">-80.8%</span></li>
            <li className="p-3 bg-black/5 dark:bg-black/20 rounded-md">Water Use: Virgin 2840 L → Recycled 680 L <span className="text-green-400 float-right">-76.1%</span></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
