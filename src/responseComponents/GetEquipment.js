import { useState } from 'react'

const GetEquipment = () => {
  const [equipment, setEquipment] = useState([
    {name: 'whisk', chosen: false},
    {name: 'frying pan', chosen: false},
    {name: 'colander', chosen: false},
    {name: 'blender', chosen: false},
    {name: 'wooden spoon', chosen: false},
    {name: 'knife', chosen: false},
    {name: 'grater', chosen: false},
    {name: 'peeler', chosen: false},
    {name: 'sieve', chosen: false},
    {name: 'pot', chosen: false},
    {name: 'microwave', chosen: false},
    {name: 'steamer', chosen: false},
    {name: 'grill', chosen: false},
    {name: 'tongues', chosen: false},
    {name: 'ladle', chosen: false},
    {name: 'rolling pin', chosen: false},
    {name: 'scales', chosen: false},
    {name: 'toaster', chosen: false},
    {name: 'mixing bowl', chosen: false}
  ])
  return (
    <div>
      <ul>
        <form>
        {equipment.map(item => {
          return (
            <li id={item.name}>
              <label for={item.name}>{item.name}</label>
          <input type='checkbox'id={item.name} value={item.chosen} onChange={() => {
            item.chosen = true
          }}></input>
          </li>
          )
        })}
        </form>
      </ul>
    </div>
  );
};

export default GetEquipment;