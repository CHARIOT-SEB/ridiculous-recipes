import GetName from './responseComponents/GetName.js'
import GetFoods from './responseComponents/GetFoods.js';
import GetEquipment from './responseComponents/GetEquipment.js';
import GetTime from './responseComponents/GetTime.js';
import GetHunger from './responseComponents/GetHunger.js';


const Response = ({stage, setResponses, responses}) => {
    return (
        <div>
            {stage === 0 && <GetName setResponses={ setResponses }/>}
            {stage === 1 && <GetFoods setResponses={ setResponses} responses={responses}/>}
            {stage === 2 && <GetEquipment setResponses={ setResponses} responses={responses}/>}
            {stage === 3 && <GetTime />}
            {stage === 4 && <GetHunger />}

        </div>
    );
};

export default Response;