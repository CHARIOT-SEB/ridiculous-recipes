const Question = ({ stage }) => {
    const questions = {
        '0': 'What is your name?',
        '1': "What's in your fridge or cupboards?",
        '2': 'What cooking utensils do you have? Choose four',
        '3': 'What time do you want to eat?',
        '4': 'How hungry are you?'
        }
    return (
        <section>
            {questions[stage]}
        </section>
    );
};

export default Question