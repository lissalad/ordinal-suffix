function ordinalSuffix(num: number): string {
  // convert to string
  let str = num.toString();

  // get last two digits
  const tween = str.substring(str.length - 2);

  // check if ends with 11, 12, or 13
  if (tween === "11" || tween === "12" || tween === "13") {
    return str += "th";
  }

  // get last digit
  const last = str.substring(str.length - 1);

  // assign suffix based on last digit
  switch(last) {
    case "1":
      return str += "st";
      break;
    case "2":
      return str += "nd";
      break;
    case "3":
      return str += "rd";
      break;
    default:
      return str += "th";
    }
}

export = ordinalSuffix;
// console.log(addSuffix(422));
