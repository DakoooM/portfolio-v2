import { TVA_Enabled, TVA_Produits } from "@/global.config";

const priceWithTVA = (price, tva = true) => {
  if (tva) {
    return (price - (price * TVA_Produits / 100));
  }

  return price;
}

const calcTVAByPrice = (price, tva = TVA_Enabled) => {
  return tva ? (price * TVA_Produits / 100) : 0;
}

const getTVA = () => TVA_Enabled ? TVA_Produits : 0;

export { priceWithTVA, getTVA, calcTVAByPrice };