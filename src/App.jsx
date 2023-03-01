import ResultOverview from './components/ResultOverview';
import ResultSummary from './components/ResultSummary';
import data from '../public/data/data.json';

function App() {
  return (
    <main className="flex justify-center items-center h-screen bg-paleblue overflow-auto">
      <section className="flex flex-col w-[48em] mx-auto md:grid md:grid-cols-2 h-100 md:h-[32em] md:rounded-[2em] bg-white">
        <ResultOverview data={data} />
        <ResultSummary data={data} />
      </section>
    </main>
  );
}

export default App;
