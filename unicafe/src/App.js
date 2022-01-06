import React, { useState } from 'react'

const StatisticLine = props => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.statistic}</td>
    </tr>
  )
}

const Statistics = props => {
  let all = props.good + props.bad + props.neutral;
  let average = (props.good - props.bad) / all;
  let positive = `${((props.good / all) * 100).toPrecision(3)}%`;

  if (all === 0) {
    return (
      <div>
        <h1>statistics</h1>
        <h3>No feedback given</h3>
      </div>
    )
  }

  return (
    <div>
      <h1>statistics</h1>
      <table>
        <tbody>
          <StatisticLine statistic={props.good} text="good" />
          <StatisticLine statistic={props.neutral} text="neutral" />
          <StatisticLine statistic={props.bad} text="bad" />
          <StatisticLine statistic={all} text="all" />
          <StatisticLine statistic={average.toPrecision(2)} text="average" />
          <StatisticLine statistic={positive} text="positive" />
        </tbody>
      </table>
    </div>
  )
}

const Button = props => <button onClick={props.onClick}>{props.text}</button>

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={() => setGood(good + 1)} text="good" />
      <Button onClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button onClick={() => setBad(bad + 1)} text="bad" />
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  )
}

export default App