export const calc = (num1, num2, calcType) => {
  if (
    Number(num1) &&
    Number(num2) &&
    (calcType === "+" || calcType === "-" || calcType === "/" || calcType === "*")
  ) {
    return eval(num1 + calcType + num2);
  } else {
    return "Falsche Eingabe";
  }
};
