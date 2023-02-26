import { useState, useEffect } from 'react';
import ResultOverview from './components/ResultOverview';
import ResultSummary from './components/ResultSummary';

function App() {
  const [data, setData] = useState([]);
  async function fetchData() {
    try {
      const response = await fetch('../public/data/data.json');
      if (!response.ok) {
        throw new Error('Cant load data');
      }
      const data = await response.json();
      setData(data);
    } catch (err) {
      alert(err.message);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

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
