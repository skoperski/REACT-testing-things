export const formatFirstLetter = (word) => {
  const splitted = word.split("");
  const upperCased = splitted[0].toUpperCase();

  splitted[0] = upperCased;

  return splitted.join("");
};
