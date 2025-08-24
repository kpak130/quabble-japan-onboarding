import React from 'react';
export function GetStarted() {
  return <div className="h-full flex flex-col items-center justify-center px-6 text-center">
      <div className="w-24 h-24 mb-8 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <h1 className="text-3xl font-bold mb-4">準備完了！</h1>
      <p className="text-slate-600 mb-8 max-w-xs">
        心の健康への旅を始める準備ができました。あなたの心の平和をサポートします。
      </p>
      <button className="w-full max-w-xs bg-indigo-500 text-white py-3 rounded-lg font-medium shadow-md mb-4">
        始めましょう
      </button>
      <div className="w-full max-w-xs flex justify-center">
        <p className="text-xs text-slate-500 max-w-[250px]">
          続行すると、当社の<span className="text-indigo-500">利用規約</span>
          および<span className="text-indigo-500">プライバシーポリシー</span>
          に同意したことになります。
        </p>
      </div>
    </div>;
}