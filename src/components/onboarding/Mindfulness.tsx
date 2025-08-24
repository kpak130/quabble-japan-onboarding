import React from 'react';
export function Mindfulness() {
  return <div className="h-full flex flex-col items-center justify-center px-6 text-center">
      <div className="w-full max-w-xs h-48 bg-blue-50 rounded-xl mb-8 flex items-center justify-center">
        <img src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" alt="Person meditating peacefully" className="h-full w-full object-cover rounded-xl" />
      </div>
      <h2 className="text-2xl font-bold mb-4">マインドフルネス</h2>
      <p className="text-slate-600 mb-6 max-w-xs">
        毎日のマインドフルネス瞑想で、現在の瞬間に意識を集中させ、心の平和を見つけましょう。
      </p>
      <div className="flex space-x-4 mb-6">
        <div className="bg-white rounded-lg p-3 shadow-sm">
          <p className="text-sm font-medium text-indigo-500">5分</p>
          <p className="text-xs text-slate-500">クイック瞑想</p>
        </div>
        <div className="bg-white rounded-lg p-3 shadow-sm">
          <p className="text-sm font-medium text-indigo-500">10分</p>
          <p className="text-xs text-slate-500">深い瞑想</p>
        </div>
        <div className="bg-white rounded-lg p-3 shadow-sm">
          <p className="text-sm font-medium text-indigo-500">15分</p>
          <p className="text-xs text-slate-500">完全な瞑想</p>
        </div>
      </div>
    </div>;
}