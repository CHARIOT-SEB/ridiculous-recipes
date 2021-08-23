const Recipe = ({ responses }) => {
  const adjectives = [
    'crazy',
    'cool',
    'fishy',
    'sweet',
    'insane',
    'silly',
    'smelly',
    'cold',
    'nutty',
    'hot',
    'slimy',
    'green',
    'pale',
    'overcooked',
    'raw',
    'disgusting',
    'evapourated',
    'thickened',
    'flattened',
    'baked',
    'edible',
  ];
  const { name, ingredients, equipment } = responses;
  const verbs = [
    'mash',
    'puree',
    'boil',
    'stir fry',
    'steam',
    'bake',
    'stew',
    'caramelise',
    'sautee',
    'microwave',
    'beat',
    'toast',
    'strain',
    'whip',
    'slice',
    'dice',
    'peel',
    'wash',
    'mix',
    'pour',
    'observe',
    'discard',
    'analyse',
    'roll',
    'swirl',
  ];
  const adverbs = [
    'carefully',
    'slowly',
    'quickly',
    'nervously',
    'roughly',
    'helpfully',
    'hopelessly',
    'dilligently',
    'agonisingly',
    'reassuringly',
    'prematurely',
  ];
  const sentences = [
    'go outside and reassess your life choices',
    'scream at the sky',
    'text your ex and tell them you love them',
    'call your parents',
    'finish that book you started',
    'call your boss and quit your job',
  ];
  const finalSentences = [
    'when your food has a covering of mold it is ready to eat',
    'the overpowering smell is the sign that your food is ready"!',
    'if youre still hungry by now, enjoy your terrible food',
  ];
  const units = [
    'mg',
    'kg',
    'tonnes',
    'pounds',
    'handfuls',
    'g',
    'cups',
    'stone',
    'thimbles',
    'megatonnes',
  ];
  const rn = (array) => {
    return array[Math.floor(Math.random() * array.length)];
  };
  const rnNo = (max) => {
    return Math.floor(Math.random() * max);
  };

  return (
    <div>
      <h2>
        {name}'s {rn(adjectives)} {rn(ingredients)} recipe
      </h2>
      <h4>Serves {rnNo(10)}</h4>
      <div className="results">
        <h3>Ingredients:</h3>
        <ul>
          {ingredients.map((ingredient) => {
            return (
              <li key={ingredient}>
                {rnNo(500)} {rn(units)} {ingredient}
              </li>
            );
          })}
        </ul>
        <h4>Steps:</h4>
        <ol>
          <li>
            {rn(verbs)} your {rn(ingredients)} for {rnNo(40)} minutes until{' '}
            {rn(adjectives)}
          </li>
          <li>
            {rn(adverbs)} {rn(verbs)} the {rn(ingredients)} using your{' '}
            {rn(equipment)}
          </li>
          <li>{rn(sentences)}</li>
          <li>
            take a {rn(equipment)} and {rn(verbs)} it {rn(adverbs)} into the{' '}
            {rn(ingredients)}
          </li>
          <li>{rn(finalSentences)}</li>
          <li></li>
        </ol>
      </div>
    </div>
  );
};

export default Recipe;
