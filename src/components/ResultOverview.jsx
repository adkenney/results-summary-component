import React from 'react';

export default function ResultOverview() {
  return (
    <section className="flex flex-col justify-center items-center gap-5 p-8 rounded-b-[2em] bg-gradient-to-b from-lightslateblue to-lightroyalblue text-white">
      <h1 className="text-lg">Your result</h1>
      <div className="flex flex-col justify-center items-center bg-gradient-to-t from-persianblue to-violetblue rounded-full h-[9em] w-[9em]">
        <h2 className="text-[3.5rem] font-extrabold">76</h2>
        <span className="text-lightlavender">of 100</span>
      </div>
      <div className="text-center">
        <h3 className="text-2xl font-bold">Great</h3>
        <p className="text-lightlavender">
          Your performance exceeded 65&#37; of the people conducting the test
          here!
        </p>
      </div>
    </section>
  );
}
