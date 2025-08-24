import React from 'react';
export function SleepImprovement() {
  return <div className="h-full flex flex-col items-center justify-center px-6 text-center">
      <div className="w-full max-w-xs h-48 bg-purple-50 rounded-xl mb-8 flex items-center justify-center">
        <img src="https://images.unsplash.com/photo-1455642305367-68834a9d4337?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" alt="Peaceful bedroom scene" className="h-full w-full object-cover rounded-xl" />
      </div>
      <h2 className="text-2xl font-bold mb-4">睡眠改善</h2>
      <p className="text-slate-600 mb-6 max-w-xs">
        質の高い睡眠は健康な心の基盤です。睡眠を改善するためのツールとテクニックを提供します。
      </p>
      <div className="w-full max-w-xs bg-white rounded-lg p-4 shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-sm font-medium">睡眠サイクル</h3>
          <span className="text-xs text-purple-500">7-8時間推奨</span>
        </div>
        <div className="relative h-2 bg-purple-100 rounded-full mb-4">
          <div className="absolute left-0 top-0 h-2 w-3/4 bg-purple-500 rounded-full"></div>
        </div>
        <div className="flex justify-between">
          <div className="text-center">
            <p className="text-xs text-slate-500">就寝</p>
            <p className="text-sm font-medium">22:30</p>
          </div>
          <div className="text-center">
            <p className="text-xs text-slate-500">起床</p>
            <p className="text-sm font-medium">6:30</p>
          </div>
        </div>
      </div>
    </div>;
}