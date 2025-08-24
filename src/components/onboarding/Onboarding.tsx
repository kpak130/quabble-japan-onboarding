import React, { useState } from 'react';
import { Welcome } from './Welcome';
import { Mindfulness } from './Mindfulness';
import { StressReduction } from './StressReduction';
import { SleepImprovement } from './SleepImprovement';
import { MoodTracking } from './MoodTracking';
import { Community } from './Community';
import { GetStarted } from './GetStarted';
import { ChevronRight, ChevronLeft } from 'lucide-react';
export function Onboarding() {
  const [currentPage, setCurrentPage] = useState(0);
  const pages = [<Welcome key="welcome" />, <Mindfulness key="mindfulness" />, <StressReduction key="stress" />, <SleepImprovement key="sleep" />, <MoodTracking key="mood" />, <Community key="community" />, <GetStarted key="getStarted" />];
  const goToNextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };
  const goToPreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };
  const skipToEnd = () => {
    setCurrentPage(pages.length - 1);
  };
  return <div className="relative h-screen w-full overflow-hidden bg-[#F8F9FC] text-slate-800">
      <div className="absolute top-4 right-4 z-10">
        {currentPage < pages.length - 1 && <button onClick={skipToEnd} className="text-sm text-slate-500 hover:text-slate-700">
            スキップ
          </button>}
      </div>
      <div className="h-full w-full">{pages[currentPage]}</div>
      <div className="absolute bottom-0 left-0 right-0 p-6 flex justify-between items-center">
        <div className="flex space-x-1.5">
          {pages.map((_, index) => <div key={index} className={`h-1.5 rounded-full ${index === currentPage ? 'w-6 bg-indigo-500' : 'w-1.5 bg-slate-300'}`} />)}
        </div>
        <div className="flex space-x-3">
          {currentPage > 0 && <button onClick={goToPreviousPage} className="w-12 h-12 rounded-full flex items-center justify-center border border-slate-200 bg-white text-slate-700 shadow-sm">
              <ChevronLeft size={20} />
            </button>}
          {currentPage < pages.length - 1 && <button onClick={goToNextPage} className="w-12 h-12 rounded-full flex items-center justify-center bg-indigo-500 text-white shadow-md">
              <ChevronRight size={20} />
            </button>}
        </div>
      </div>
    </div>;
}