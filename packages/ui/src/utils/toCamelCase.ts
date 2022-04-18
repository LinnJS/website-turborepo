export const toCamelCase = (string: string) => {
  const formattedCamelCase = string.replace(/-([a-z])/g, (g) => g[1].toUpperCase());

  return formattedCamelCase;
};
