import ReactDOMServer from "react-dom/server";

const toPascalCase = (str) => {
  return str ? str.replace(/(\w)(\w*)/g, (_, p, q) => p.toUpperCase() + q.toLowerCase()) : str;
};

const transformToUndefined = (str) => str === "" ? undefined : str;

/**
 * @param {React.JSXElement} jsx 
*/
const jsxToString = (jsx) => {
  return ReactDOMServer.renderToString(jsx);
}

/** 
 * @param {String} str
 * @param {String} replacer
*/
const replaceAllTagWith = (str, replacer = "") => {
  if (!str) return str;

  var regex = /(&nbsp;|<([^>]+)>)/ig;
  var result = str.replace(regex, replacer);

  return result;
}

export { toPascalCase, transformToUndefined, jsxToString, replaceAllTagWith };