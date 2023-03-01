import ResultOverview from './components/ResultOverview';
import ResultSummary from './components/ResultSummary';
import data from '../src/assets/data/data.json';

function App() {
  return (
    <div className="flex justify-center items-center h-screen bg-paleblue overflow-auto">
      <div className="flex flex-col w-[48em] mx-auto md:grid md:grid-cols-2 h-100 md:h-[32em] md:rounded-[2em] bg-white">
        <ResultOverview data={data} />
        <ResultSummary data={data} />
      </div>
    </div>
  );
}

export default App;
