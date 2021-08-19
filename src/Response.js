import getName from './getName.js'

const Response = ({stage}) => {
    const responses = {
        '0': <getName />,
        '1': "What's in your fridge or cupboards?",
        '2': 'What cooking utensils do you have? Choose four',
        '3': 'What time do you want to eat?',
        '4': 'How hungry are you?'
        }
    return (
        <div>
            {responses[stage]}
        </div>
    );
};

export default Response;