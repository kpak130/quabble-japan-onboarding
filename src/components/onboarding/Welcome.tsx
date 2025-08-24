import React from 'react';
export function Welcome() {
  return <div className="h-full flex flex-col items-center justify-center px-6 text-center">
      <div className="w-24 h-24 mb-8 rounded-full bg-indigo-100 flex items-center justify-center">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8 14C8.5 15.5 10 16.5 12 16.5C14 16.5 15.5 15.5 16 14" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M9 9H9.01" stroke="#6366F1" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M15 9H15.01" stroke="#6366F1" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <h1 className="text-3xl font-bold mb-4">心の平和へようこそ</h1>
      <p className="text-slate-600 mb-8 max-w-xs">
        あなたの心の健康をサポートする旅が始まります。日々の心の平和をサポートするツールをご紹介します。
      </p>
      <div className="w-full max-w-xs h-48 bg-indigo-50 rounded-xl mb-4 flex items-center justify-center">
        <img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" alt="Peaceful zen garden" className="h-full w-full object-cover rounded-xl" />
      </div>
    </div>;
}