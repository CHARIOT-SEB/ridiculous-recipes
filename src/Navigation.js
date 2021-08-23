const Navigation = ({stage, setStage}) => {
    let prompt
    if (stage < 4) {
        prompt = '→ next stage →';
    } else if (stage === 4) {
        prompt = "Create your recipe"
    } else {
        prompt = "Start again"
    }
    return (
        <div>
            <button htmlFor="nameInput" onClick={() => {setStage(stage => ++stage)}}>{prompt}</button>
        </div>
    );
};

export default Navigation;