export const toKebabCase = (string: string) => {
  const formattedKebabCase = string.toLowerCase().replace(/ /g, '-');

  return formattedKebabCase;
};
