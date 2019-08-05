const PLAYERS = [
  {
    id: '7a61b2d5-642e-4066-ab6f-c98c46cc15e3',
    name: 'Benny',
    icon:
      'data:image/png;base64,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',
    deck: ['2fbb22c8-4f59-4c98-adf5-7cda3f82d9c1'],
    decksize: 1,
    currentActiveCard: '2fbb22c8-4f59-4c98-adf5-7cda3f82d9c1',
  },
  {
    id: '0452d84c-af59-4f32-b167-28b390f787d1',
    name: 'Alex',
    icon:
      'data:image/png;base64,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',
    deck: ['e6d39fb5-3e40-42ab-9b85-442f4d36c630'],
    decksize: 1,
    currentActiveCard: 'e6d39fb5-3e40-42ab-9b85-442f4d36c630',
  },
];

export default PLAYERS;