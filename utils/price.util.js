export function formatPrice(number = 0) {
  if (number % 1 != 0) {
    return number.toString().replace(".", ",") + "0";
  }
  
  return number;
}