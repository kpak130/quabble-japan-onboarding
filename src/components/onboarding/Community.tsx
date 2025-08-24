import React from 'react';
export function Community() {
  return <div className="h-full flex flex-col items-center justify-center px-6 text-center">
      <div className="w-full max-w-xs h-48 bg-sky-50 rounded-xl mb-8 flex items-center justify-center">
        <img src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" alt="Supportive community" className="h-full w-full object-cover rounded-xl" />
      </div>
      <h2 className="text-2xl font-bold mb-4">コミュニティサポート</h2>
      <p className="text-slate-600 mb-6 max-w-xs">
        同じ目標を持つ仲間とつながり、お互いをサポートし合いましょう。一人ではありません。
      </p>
      <div className="w-full max-w-xs">
        <div className="bg-white rounded-lg p-4 shadow-sm mb-4">
          <div className="flex items-center mb-3">
            <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center mr-3">
              <span className="text-sky-500 font-medium">TK</span>
            </div>
            <div className="text-left">
              <p className="text-sm font-medium">田中 健太</p>
              <p className="text-xs text-slate-500">5分前</p>
            </div>
          </div>
          <p className="text-sm text-left text-slate-600">
            今日の瞑想セッションは本当に役立ちました。皆さんもぜひ試してみてください！
          </p>
          <div className="flex justify-between mt-3">
            <span className="text-xs text-sky-500">いいね 24</span>
            <span className="text-xs text-slate-500">返信 5</span>
          </div>
        </div>
        <div className="flex justify-center">
          <span className="text-sm text-sky-500 font-medium">
            コミュニティに参加する
          </span>
        </div>
      </div>
    </div>;
}