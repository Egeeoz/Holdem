const createDeck = () => {
  const suits = ['spades', 'hearts', 'clubs', 'diamonds'];
  const values = [
    'A',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    'J',
    'Q',
    'K',
  ];

  let deck = new Array();

  for (let i = 0; i < suits.length; i++) {
    for (let x = 0; x < values.length; x++) {
      const card = { Value: values[x], Suit: suits[i] };
      deck.push(card);
    }
  }
  return deck;
};

export default createDeck;
