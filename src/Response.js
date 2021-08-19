import GetName from './responseComponents/GetName.js'
import GetFoods from './responseComponents/GetFoods.js';
import GetEquipment from './responseComponents/GetEquipment.js';
import GetTime from './responseComponents/GetTime.js';
import GetHunger from './responseComponents/GetHunger.js';


const Response = ({stage}) => {
    return (
        <div>
            {stage === 0 && <GetName />}
            {stage === 1 && <GetFoods />}
            {stage === 2 && <GetEquipment />}
            {stage === 3 && <GetTime />}
            {stage === 4 && <GetHunger />}

        </div>
    );
};

export default Response;