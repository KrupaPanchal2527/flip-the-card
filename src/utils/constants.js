const duplicateAndRandomize = (data) => {
  const updatedArr = [...data, ...data];
  return updatedArr
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
};

export const cardData = duplicateAndRandomize([
  "đ€Ą",
  "đ€Ż"
  // "đ",
  // "đ©",
  // "đ",
  // "đ€đ»",
  // "đŠčđ»ââïž",
  // "đŁ"
]);
