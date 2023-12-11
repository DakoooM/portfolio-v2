export const toPascalCase = (str) => {
  return str ? str.replace(/(\w)(\w*)/g, (_, p, q) => p.toUpperCase() + q.toLowerCase()) : str;
};

export const transformToUndefined = (str) => str === "" ? undefined : str;