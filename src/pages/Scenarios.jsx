import React from 'react'

export default function Scenarios(){
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 text-black dark:text-white">Scenario Simulator</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-[#0e1416] p-6 rounded-xl">
          <h3 className="font-semibold mb-3">Scenario 1: Current Process</h3>
          <div className="mb-3">Recycled Content: 30%</div>
          <input type="range" defaultValue="30" className="w-full" />
          <div className="mt-4 grid grid-cols-2 gap-3">
            <div className="p-4 bg-black/5 dark:bg-black/20 rounded-md">CO₂<br/><strong>15.2</strong></div>
            <div className="p-4 bg-black/5 dark:bg-black/20 rounded-md">Energy<br/><strong>27.4</strong></div>
            <div className="p-4 bg-black/5 dark:bg-black/20 rounded-md">Water<br/><strong>1292</strong></div>
            <div className="p-4 bg-black/5 dark:bg-black/20 rounded-md">Circularity<br/><strong>54</strong></div>
          </div>
        </div>

        <div className="bg-white dark:bg-[#0e1416] p-6 rounded-xl">
          <h3 className="font-semibold mb-3">Scenario 2: Optimized</h3>
          <div className="mb-3">Recycled Content: 70%</div>
          <input type="range" defaultValue="70" className="w-full" />
          <div className="mt-4 grid grid-cols-2 gap-3">
            <div className="p-4 bg-black/5 dark:bg-black/20 rounded-md">CO₂<br/><strong>2.3</strong></div>
            <div className="p-4 bg-black/5 dark:bg-black/20 rounded-md">Energy<br/><strong>4.2</strong></div>
            <div className="p-4 bg-black/5 dark:bg-black/20 rounded-md">Water<br/><strong>196</strong></div>
            <div className="p-4 bg-black/5 dark:bg-black/20 rounded-md">Circularity<br/><strong>100</strong></div>
          </div>
        </div>
      </div>

      <div className="mt-6 bg-white dark:bg-[#0e1416] p-6 rounded-xl">
        <div className="text-sm text-gray-400">Impact Comparison (placeholder)</div>
        <div className="h-48 flex items-center justify-center text-gray-500">[comparison chart]</div>
      </div>
    </div>
  )
}
