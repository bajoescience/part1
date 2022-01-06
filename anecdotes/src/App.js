import React, { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
   
  const [selected, setSelected] = useState(0)

  let min = Math.ceil(0);
  let max = Math.floor(7);
  let num = Math.floor(Math.random()*(max - min) + min);
  console.log(num);

  // Remeber to make it random
  const rand = () => setSelected(num)

  // Allow users to vote
  const [points, setPoints] = useState([
    0, 0, 0, 0, 0, 0, 0
  ])

  const vote = (selected) => {
    let point = [...points];
    point[selected] += 1;
    setPoints(point);
  }

  // Highest points
  // Initialize highest value
  let highest = 0;

  for (let i = 0; i < 7; i++) {
    

    // Iterate through array to find highest value
    if (points[i] < points[i + 1]) {
      highest = i + 1;
    }
  }

  return (
    <div>
      <h1>Ancedote of the day</h1>
      {anecdotes[selected]}
      <p>has {points[selected]} votes</p>
      <div>
        <button onClick={() => vote(selected)}>vote</button>
        <button onClick={rand}>next anecdote</button>
      </div>
      <h1>Ancedote with the most votes</h1>
      <div>
        {anecdotes[highest]}
      </div>
    </div>
  )
}


export default App;
