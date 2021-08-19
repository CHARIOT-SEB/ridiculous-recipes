import './App.css';
import Question from './Question.js';
import Response from './Response.js';
import Navigation from './Navigation.js';
import Recipe from './Recipe.js';
import { useState } from 'react';

function App() {
  const [stage, setStage] = useState(0);
  if (stage === 6) {
    setStage(0);
  }

  const [responses, setResponses] = useState({
    '0': '',
    '1': [],
    '2': [],
    '3': '',
    '4': 0,
  });

  return (
    <div className="App">
      <h1>Ridiculous Recipes</h1>
      {stage < 5 && <Question stage={stage} />}
      {stage < 5 && <Response stage={stage} />}
      {stage === 5 && <Recipe />}
      <Navigation stage={stage} setStage={setStage} />
    </div>
  );
}

export default App;
