import React from 'react'

function Field({label, placeholder, type='text'}) {
  return (
    <div className="mb-4">
      <label className="block text-sm text-gray-500 mb-1">{label}</label>
      <input type={type} placeholder={placeholder} className="w-full p-3 rounded-md bg-gray-50 dark:bg-[#081116] border border-gray-200 dark:border-gray-800 text-sm" />
    </div>
  )
}

export default function InputData(){
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 text-black dark:text-white">Smart Data Input</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white dark:bg-[#0e1416] p-6 rounded-xl">
            <h2 className="font-semibold mb-3">Material Type</h2>
            <select className="w-full p-3 rounded-md bg-gray-50 dark:bg-[#081116] border dark:border-gray-800">
              <option>Aluminum</option>
              <option>Copper</option>
              <option>Steel</option>
            </select>
          </div>

          <div className="bg-white dark:bg-[#0e1416] p-6 rounded-xl">
            <h2 className="font-semibold mb-3">Material Composition</h2>
            <div className="mb-2 text-sm text-gray-400">Recycled Content: 30%</div>
            <input type="range" defaultValue="30" className="w-full" />
            <div className="flex gap-4 mt-3">
              <div className="p-3 bg-red-50 dark:bg-[#2a1111] rounded-md flex-1">Virgin Content<br/><span className="font-bold text-red-400">70%</span></div>
              <div className="p-3 bg-green-50 dark:bg-[#072a21] rounded-md flex-1">Recycled Content<br/><span className="font-bold text-green-400">30%</span></div>
            </div>
          </div>

          <div className="bg-white dark:bg-[#0e1416] p-6 rounded-xl">
            <h2 className="font-semibold mb-3">Energy Source</h2>
            <select className="w-full p-3 rounded-md bg-gray-50 dark:bg-[#081116] border dark:border-gray-800">
              <option>Grid Mix</option>
              <option>Renewable</option>
            </select>
            <div className="grid grid-cols-2 gap-3 mt-4">
              <Field label="Production Volume (tonnes/year)" placeholder="e.g., 1000" />
              <Field label="Processing Temperature (°C)" placeholder="e.g., 660" />
            </div>
          </div>

          <div className="bg-white dark:bg-[#0e1416] p-6 rounded-xl">
            <h2 className="font-semibold mb-3">Transportation</h2>
            <div className="grid grid-cols-2 gap-3">
              <Field label="Distance (km)" placeholder="e.g., 250" />
              <div>
                <label className="block text-sm text-gray-500 mb-1">Transport Mode</label>
                <select className="w-full p-3 rounded-md bg-gray-50 dark:bg-[#081116] border dark:border-gray-800">
                  <option>Truck</option>
                  <option>Rail</option>
                </select>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-[#0e1416] p-6 rounded-xl">
            <h2 className="font-semibold mb-3">End-of-Life Scenario</h2>
            <select className="w-full p-3 rounded-md bg-gray-50 dark:bg-[#081116] border dark:border-gray-800">
              <option>Recycle</option>
              <option>Landfill</option>
            </select>
          </div>
        </div>

        <aside className="space-y-4">
          <div className="bg-white dark:bg-[#0e1416] p-5 rounded-xl">
            <div className="text-sm text-gray-400">Data Completeness</div>
            <ul className="mt-3 text-sm space-y-2">
              <li>Material Type: Pending</li>
              <li>Recycled Content: Complete</li>
              <li>Energy Source: Pending</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-[#0e1416] p-5 rounded-xl">
            <div className="text-sm text-gray-400">Quick Estimates</div>
            <div className="mt-3">
              <div className="text-xs text-gray-400">Estimated CO₂ Impact</div>
              <div className="text-lg font-semibold">3.8 kg/tonne</div>
              <div className="text-xs text-gray-400 mt-2">Circularity Score</div>
              <div className="text-lg font-semibold">44/100</div>
            </div>
            <button className="mt-4 w-full py-3 rounded-md bg-gradient-to-r from-[#00c985] to-[#00d4ff] text-black">Save & Analyze</button>
          </div>
        </aside>
      </div>
    </div>
  )
}
