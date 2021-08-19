import { useState } from "react";
import setResponses from '../App';

const GetName = () => {
    const [newName, setNewName] = useState('') 
    const handleSubmit = (event) => {
        event.preventDefault()
        setResponses((currentResponse) => {
          console.log(currentResponse);
          const { stage, ...rest } = currentResponse // <<------ HELP
          return Object.assign({newName}, rest)
        });
    }

    //  return dogs.map(dog => {    const { age, ...rest } = dog    return Object.assign({ age: age * 7 }, rest)    })   };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input id="nameInput" type="text" value={newName} onChange={(event)=> {
                    setNewName(event.target.value)
                }}></input>
                <button htmlFor="nameInput">Submit name</button>
            </form>
        </div>
    );
};

export default GetName;