import { CardsAdvantagesList } from "@/global.config";

/** 
 * @param { String } name
*/
export function findOfferByName(name) {
  const result = CardsAdvantagesList.filter(i => i.type === name);
  if (result && result.length > 0) {
    return result[0];
  }

  return null;
}