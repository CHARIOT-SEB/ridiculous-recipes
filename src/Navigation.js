const Navigation = ({stage, setStage}) => {
    let prompt
    if (stage < 4) {
        prompt = "→"
    } else if (stage === 4) {
        prompt = "Create your recipe"
    } else {
        prompt = "Start again"
    }
    return (
        <div>
            <button onClick={() => {setStage(stage => ++stage)}}>{prompt}</button>
        </div>
    );
};

export default Navigation;