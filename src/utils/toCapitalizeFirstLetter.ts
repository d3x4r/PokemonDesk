const toCapitalizeFirstLetter = (str: string) => {
  if (str === '') {
    return '';
  }
  const [firstLetter, ...otherLetters] = str.split('');
  return `${firstLetter.toUpperCase()}${otherLetters.join('').toLowerCase()}`;
};

export default toCapitalizeFirstLetter;
