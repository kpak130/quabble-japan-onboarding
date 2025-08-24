import React from 'react';
export function StressReduction() {
  return <div className="h-full flex flex-col items-center justify-center px-6 text-center">
      <div className="w-full max-w-xs h-48 bg-green-50 rounded-xl mb-8 flex items-center justify-center">
        <img src="https://images.unsplash.com/photo-1507494924047-60b8ee826ca9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" alt="Peaceful nature scene" className="h-full w-full object-cover rounded-xl" />
      </div>
      <h2 className="text-2xl font-bold mb-4">ストレス軽減</h2>
      <p className="text-slate-600 mb-6 max-w-xs">
        科学的に実証されたテクニックを使用して、日常のストレスを軽減し、心の平穏を取り戻しましょう。
      </p>
      <div className="grid grid-cols-2 gap-3 w-full max-w-xs">
        <div className="bg-white rounded-lg p-3 shadow-sm flex flex-col items-center">
          <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mb-2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.5 8.5C15.5 10.433 13.933 12 12 12C10.067 12 8.5 10.433 8.5 8.5C8.5 6.567 10.067 5 12 5C13.933 5 15.5 6.567 15.5 8.5Z" stroke="#22C55E" strokeWidth="2" />
              <path d="M12 22C16.5 22 21 18.5 21 13C21 7.5 16.5 2 12 2C7.5 2 3 7.5 3 13C3 18.5 7.5 22 12 22Z" stroke="#22C55E" strokeWidth="2" />
            </svg>
          </div>
          <p className="text-xs font-medium">呼吸法</p>
        </div>
        <div className="bg-white rounded-lg p-3 shadow-sm flex flex-col items-center">
          <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mb-2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M9 22V12H15V22" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <p className="text-xs font-medium">リラックス</p>
        </div>
        <div className="bg-white rounded-lg p-3 shadow-sm flex flex-col items-center">
          <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mb-2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <p className="text-xs font-medium">マインドフル</p>
        </div>
        <div className="bg-white rounded-lg p-3 shadow-sm flex flex-col items-center">
          <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mb-2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M7.5 12H16.5" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M12 7.5V16.5" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <p className="text-xs font-medium">ヨガ</p>
        </div>
      </div>
    </div>;
}