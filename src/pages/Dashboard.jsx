import React from 'react'

const StatCard = ({title, value, hint})=>(
  <div className="bg-white dark:bg-[#0e1416] p-5 rounded-xl shadow-sm">
    <div className="text-sm text-gray-500 dark:text-gray-400">{title}</div>
    <div className="text-2xl font-semibold mt-2">{value}</div>
    {hint && <div className="text-xs text-green-400 mt-1">{hint}</div>}
  </div>
)

export default function Dashboard(){
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 text-black dark:text-white">Dashboard Overview</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <StatCard title="CO₂ Emissions" value="2.45 kg/tonne" hint="-15.2% vs last month" />
        <StatCard title="Energy Use" value="3.8 MWh/tonne" hint="-12.5% vs last month" />
        <StatCard title="Water Use" value="1,240 litres/tonne" hint="-8.3% vs last month" />
        <StatCard title="Circularity Index" value="78 /100" hint="+5.7% vs last month" />
      </div>

      <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-[#0e1416] rounded-xl p-6">
          <div className="text-sm text-gray-400">Circularity Score</div>
          <div className="flex items-center gap-6 mt-4">
            <div className="w-40 h-40 rounded-full bg-black/10 dark:bg-black/20 flex items-center justify-center text-3xl font-bold">78</div>
            <div>
              <div className="text-sm text-gray-400">Overall circular economy performance</div>
              <div className="mt-4 text-gray-300">Excellent circularity performance</div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-[#0e1416] rounded-xl p-6">
          <div className="text-sm text-gray-400">Recent Projects</div>
          <ul className="mt-4 space-y-3">
            {['Aluminum Recycling Plant A','Copper Mining Project B','Steel Production Line C','Titanium Recovery D'].map((p,i)=>(
              <li key={i} className="p-3 bg-black/5 dark:bg-black/20 rounded-md flex justify-between items-center">
                <div>
                  <div className="font-medium text-sm">{p}</div>
                  <div className="text-xs text-gray-400">Subtitle or short desc</div>
                </div>
                <div className="text-sm text-gray-400">85%</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
