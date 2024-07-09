import { useState } from "react";

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [average, setAverage] = useState(0);
  const [percentage, setPercentage] = useState(0);

  const handleGood = () => {
    setGood((prev) => prev + 1);

    const updateGood = good + 1;
    setTotal(updateGood + neutral + bad);

    const updateTotal = total + 1;
    setAverage((updateGood - bad) / updateTotal);
  };

  const handleNeutral = () => {
    setNeutral((prev) => prev + 1);
  };
  const handleBad = () => {
    setBad((prev) => prev + 1);
  };

  return (
    <div>
      <h1>Give feedback</h1>
      <Buttons
        handleGood={handleGood}
        handleBad={handleBad}
        handleNeutral={handleNeutral}
      />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
}

const Buttons = ({ handleGood, handleNeutral, handleBad }) => {
  return (
    <>
      <button onClick={handleGood}>good</button>
      <button onClick={handleNeutral}>neutral</button>
      <button onClick={handleBad}>bad</button>
    </>
  );
};

const Statistics = ({ good, neutral, bad, total, all }) => {
  return (
    <>
      <h1>Statistics</h1>
      <h4>Good: {good}</h4>
      <h4>neutral: {neutral} </h4>
      <h4>bad: {bad}</h4>
      <h4>total: {all}</h4>
    </>
  );
};

export default App;
