import React from 'react';

export default function ResultOverview({ data }) {
  function getAverageScore(data) {
    let average = 0;
    average =
      data.map(test => test.score).reduce((prev, curr) => prev + curr, 0) /
      data.length;
    return Math.floor(average).toFixed(0);
  }

  return (
    <div className="flex flex-col justify-center md:justify-start items-center gap-5 md:gap-8 p-8 md:p-10 md:px-12 rounded-b-[2em] md:rounded-[2em] bg-gradient-to-b from-lightslateblue to-lightroyalblue text-white">
      <h1 className="text-lg md:text-2xl mt-16 md:mt-0">Your result</h1>
      <div className="flex flex-col justify-center items-center bg-gradient-to-t from-persianblue to-violetblue rounded-full h-[9em] w-[9em] md:h-[12.5em] md:w-[12.5em]">
        <h2 className="text-[3.5rem] md:text-7xl font-extrabold">
          {`${getAverageScore(data)}`}
        </h2>
        <span className="text-lightlavender">of 100</span>
      </div>
      <div className="text-center">
        <h3 className="text-2xl font-bold md:text-[2rem] mb-2 md:mb-5">
          Great
        </h3>
        <p className="md:text-lg text-lightlavender">
          Your performance exceeded 65&#37; of the people conducting the test
          here!
        </p>
      </div>
    </div>
  );
}
