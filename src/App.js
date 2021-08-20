import './App.css';
import Question from './Question.js';
import Response from './Response.js';
import Navigation from './Navigation.js';
import Recipe from './Recipe.js';
import { useState } from 'react';

function App() {
  const [stage, setStage] = useState(0);
  if (stage === 4) {
    setStage(0);
  }

  const [responses, setResponses] = useState({
    name: '',
    ingredients: [],
    equipment: [],
  });

  return (
    <div className="App">
      <h1>Ridiculous Recipes</h1>
      {stage < 3 && <Question stage={stage} />}
      {stage < 3 && <Response stage={stage} setResponses={setResponses} responses={responses}/>}
      {stage === 3 && <Recipe responses={responses}/>}
      <Navigation stage={stage} setStage={setStage} />
    </div>
  );
}

export default App;
