import { writeFileSync, existsSync, readFileSync } from "fs";

/** 
 * @param {String} filepath
*/
async function isFileExist(filepath) {
  return await existsSync(process.cwd() + filepath);
}

/** 
 * @param {String} path
 * @param {String | BufferSource} content
*/
async function saveFileAs(path, content) {
  return await writeFileSync(process.cwd() + path, content);
}

/**
 * @returns {JSON} data devis
 */
function getDevis() {
 const data = readFileSync(process.cwd() + "/storages/devis.json");
 const parsed = JSON.parse(data);
 
 return parsed;
}

/**
 * @returns {Number} data devis length
 */
function getDevisLength() {
  const data = readFileSync(process.cwd() + "/storages/devis.json");
  const parsed = JSON.parse(data);
 
  return parsed?.length;
 }

/** 
 * @param {Object} data
*/
async function addDevis(data) {
  if (!data) return;

  const oldFile = await getDevis();
  oldFile.push(data);

  return await writeFileSync(process.cwd() + "/storages/devis.json", JSON.stringify(oldFile, null, 4));
}



export { getDevis, addDevis, saveFileAs, isFileExist, getDevisLength };