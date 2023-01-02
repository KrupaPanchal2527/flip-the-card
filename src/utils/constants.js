const duplicateAndRandomize = (data) => {
  const updatedArr = [...data, ...data];
  return updatedArr
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
};

export const cardData = duplicateAndRandomize([
  "🤡",
  "🤯"
  // "😈",
  // "💩",
  // "💃",
  // "🤌🏻",
  // "🦹🏻‍♀️",
  // "🐣"
]);
