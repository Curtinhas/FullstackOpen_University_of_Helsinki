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

    setPercentage((updateGood / updateTotal) * 100 + "%");
  };

  const handleNeutral = () => {
    setNeutral((prev) => prev + 1);

    const updateNeutral = neutral + 1;
    setTotal(good + bad + updateNeutral);

    const updateTotal = total + 1;
    setPercentage((good / updateTotal) * 100 + "%");
  };

  const handleBad = () => {
    setBad((prev) => prev + 1);

    const updateBad = bad + 1;
    setTotal(good + neutral + updateBad);

    const updateTotal = total + 1;
    setAverage((good - updateBad) / updateTotal);

    setPercentage((good / updateTotal) * 100 + "%");
  };

  return (
    <div>
      <Heading text={"give feedback"} />
      <Buttons handleClick={handleGood} text={"good"} />
      <Buttons handleClick={handleNeutral} text={"neutral"} />
      <Buttons handleClick={handleBad} text={"bad"} />
      <Heading text="statistics" />

      <Statistics count={[good, neutral, bad, total, average, percentage]} />
    </div>
  );
}

const Heading = ({ text }) => {
  return <h1>{text}</h1>;
};

const Buttons = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const StatisticsLine = ({ name, value }) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{value}</td>
    </tr>
  );
};

const Statistics = ({ count }) => {
  if (count[0] || count[1] || count[3] > 0) {
    return (
      <div>
        <StatisticsLine name="good" value={count[0]} />
        <StatisticsLine name="neutral" value={count[1]} />
        <StatisticsLine name="bad" value={count[2]} />
        <StatisticsLine name="all" value={count[3]} />
        <StatisticsLine name="average" value={count[4]} />
        <StatisticsLine name="positive" value={count[5]} />
      </div>
    );
  }
  return <p>No feedback given</p>;
};
export default App;
