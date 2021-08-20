import { useState } from 'react';

const GetEquipment = ({ setResponses, responses }) => {
  const [newTool, setTool] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    setResponses((currentResponse) => {
      const copy = { ...currentResponse };
      let equipmentCopy = [...copy.equipment];
      equipmentCopy.push(newTool);
      copy.equipment = equipmentCopy;
      return copy;
    });
    setTool('');
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          key="equipmentInput"
          type="text"
          value={newTool}
          onChange={(event) => {
            setTool(event.target.value);
          }}
        ></input>
        <button htmlFor="equipmentInput">+</button>
      </form>
      <ul>
        {responses.equipment.map((tool) => {
          return <li key={tool}>{tool}</li>;
        })}
      </ul>
    </div>
  );
};


// const GetEquipment = () => {
//   const [equipment, setEquipment] = useState([
//     { name: 'whisk', chosen: false },
//     { name: 'frying pan', chosen: false },
//     { name: 'colander', chosen: false },
//     { name: 'blender', chosen: false },
//     { name: 'wooden spoon', chosen: false },
//     { name: 'knife', chosen: false },
//     { name: 'grater', chosen: false },
//     { name: 'peeler', chosen: false },
//     { name: 'sieve', chosen: false },
//     { name: 'pot', chosen: false },
//     { name: 'microwave', chosen: false },
//     { name: 'steamer', chosen: false },
//     { name: 'grill', chosen: false },
//     { name: 'tongues', chosen: false },
//     { name: 'ladle', chosen: false },
//     { name: 'rolling pin', chosen: false },
//     { name: 'scales', chosen: false },
//     { name: 'toaster', chosen: false },
//     { name: 'mixing bowl', chosen: false },
//   ]);

//   console.log(equipment);

//   const booleanFlip = (bool) => {
//     return !bool;
//   };

//   const updateEquipment = (currentEquipment, item) => {
//     console.log(currentEquipment)
//     console.log(item)
//     const arrayCopy = [...currentEquipment];

//     return arrayCopy;
//   };

//   return (
//     <div>
//       <ul>
//         <form>
//           {equipment.map((item) => {
//             return (
//               <li key={item.name}>
//                 <label htmlFor={item.name}>{item.name}</label>
//                 <input
//                   type="checkbox"
//                   key={item.name}
//                   value={item.chosen}
//                   onChange={() => {
//                     setEquipment(updateEquipment);
//                   }}
//                 ></input>
//               </li>
//             );
//           })}
//         </form>
//       </ul>
//     </div>
//   );
// };

export default GetEquipment;
