import { useState } from "react";
let message = 'Submit name'
let active = 'button-active'
const GetName = ({ setResponses }) => {

    const [newName, setNewName] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        setResponses((currentResponse) => {
          const copy = { ...currentResponse }
          copy.name = newName
          return copy
        });

    message = '✔'
    active = 'button-inactive'

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input id="nameInput" type="text" value={newName} onChange={(event)=> {
                    setNewName(event.target.value)
                }}></input>
                <button htmlFor="nameInput" className={active}>{message}</button>
            </form> <br />
        </div>
    );
};

export default GetName;