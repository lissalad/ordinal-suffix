"use strict";
function ordinalSuffix(num) {
    // convert to string
    var str = num.toString();
    // get last two digits
    var tween = str.substring(str.length - 2);
    // check if ends with 11, 12, or 13
    if (tween === "11" || tween === "12" || tween === "13") {
        return str += "th";
    }
    // get last digit
    var last = str.substring(str.length - 1);
    // assign suffix based on last digit
    switch (last) {
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
module.exports = ordinalSuffix;
// console.log(addSuffix(422));
