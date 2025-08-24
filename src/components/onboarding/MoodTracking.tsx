import React from 'react';
export function MoodTracking() {
  return <div className="h-full flex flex-col items-center justify-center px-6 text-center">
      <div className="w-full max-w-xs h-48 bg-amber-50 rounded-xl mb-8 flex items-center justify-center">
        <img src="https://images.unsplash.com/photo-1517932754346-2ad976c8bf08?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" alt="Mood tracking journal" className="h-full w-full object-cover rounded-xl" />
      </div>
      <h2 className="text-2xl font-bold mb-4">気分トラッキング</h2>
      <p className="text-slate-600 mb-6 max-w-xs">
        日々の気分を記録し、パターンを理解することで、より良い精神的健康を実現しましょう。
      </p>
      <div className="w-full max-w-xs">
        <div className="flex justify-between mb-6">
          {['😔', '😐', '🙂', '😊', '😃'].map((emoji, index) => <div key={index} className="flex flex-col items-center">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl ${index === 3 ? 'bg-amber-100 border-2 border-amber-300' : 'bg-white border border-slate-200'}`}>
                {emoji}
              </div>
              <span className="text-xs mt-2 text-slate-600">
                {['悪い', 'やや悪い', '普通', '良い', '最高'][index]}
              </span>
            </div>)}
        </div>
        <div className="bg-white rounded-lg p-3 shadow-sm">
          <p className="text-sm text-slate-600 mb-2">今日の気分メモ:</p>
          <p className="text-xs text-slate-500 text-left">
            今日は穏やかな一日でした。朝の瞑想が効果的で、一日中落ち着いた気分でいられました。
          </p>
        </div>
      </div>
    </div>;
}