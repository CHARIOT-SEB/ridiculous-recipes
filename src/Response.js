import GetName from './responseComponents/GetName.js'
import GetFoods from './responseComponents/GetFoods.js';
import GetEquipment from './responseComponents/GetEquipment.js';


const Response = ({stage, setResponses, responses}) => {
    return (
        <div>
            {stage === 0 && <GetName setResponses={ setResponses }/>}
            {stage === 1 && <GetFoods setResponses={ setResponses} responses={responses}/>}
            {stage === 2 && <GetEquipment setResponses={ setResponses} responses={responses}/>}

        </div>
    );
};

export default Response;