import React from 'react';
import { ReactComponent as MemoryIcon } from '../assets/images/icon-memory.svg';
import { ReactComponent as ReactionIcon } from '../assets/images/icon-reaction.svg';
import { ReactComponent as VerbalIcon } from '../assets/images/icon-verbal.svg';
import { ReactComponent as VisualIcon } from '../assets/images/icon-visual.svg';

export default function ResultSummary({ data }) {
  function getCategoryClass(category) {
    if (category === 'Reaction') {
      return 'bg-lightred/10 text-lightred';
    } else if (category === 'Memory') {
      return 'bg-orangeyyellow/10 text-orangeyyellow';
    } else if (category === 'Verbal') {
      return 'bg-greenteal/10 text-greenteal';
    } else {
      return 'bg-cobaltblue/10 text-cobaltblue';
    }
  }

  return (
    <div className="flex flex-col gap-1 md:gap-3 p-8 md:p-8">
      <h4 className="text-lg md:text-2xl mb-6">Summary</h4>
      <ul className="flex flex-col gap-3 md:gap-4 list-none md:text-lg">
        {data.map(test => {
          return (
            <li
              key={test.category}
              className={`flex justify-between items-center rounded-2xl p-4 ${getCategoryClass(
                test.category
              )}`}
            >
              <div className="flex items-center gap-1">
                <img src={test.icon} alt=""></img>
                <p>{test.category}</p>
              </div>
              <p className="text-darkblue">
                {test.score}
                <span className="opacity-60">/100</span>
              </p>
            </li>
          );
        })}
      </ul>
      <button className="hover:bg-gradient-to-b from-lightslateblue to-lightroyalblue rounded-full bg-darkblue text-white p-2.5 md:p-3.5 mt-4 md:mt-5">
        Continue
      </button>
    </div>
  );
}
