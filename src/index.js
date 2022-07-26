module.exports = function toReadable(number) {
    const strNumber = number.toString().split("").reverse();

    let rezultStr = [];

    strNumber.forEach((element, index) => {
        tempStr = "";
        switch (index) {
            case 2:
                tempStr = " hundred";
                break;
            case 3:
                tempStr = " thousand";
                break;
        }

        switch (index) {
            case 2:
            case 3:
            case 0:
                switch (element) {
                    case "0":
                        strNumber.length == 1
                            ? (tempStr = "zero")
                            : strNumber[1] == 1
                            ? (tempStr = "ten")
                            : undefined;

                        break;
                    case "1":
                        index == 0 && strNumber.length > 1 && strNumber[1] == 1
                            ? (tempStr = "eleven")
                            : (tempStr = "one" + tempStr);
                        break;
                    case "2":
                        index == 0 && strNumber.length > 1 && strNumber[1] == 1
                            ? (tempStr = "twelve")
                            : (tempStr = "two" + tempStr);
                        break;
                    case "3":
                        index == 0 && strNumber.length > 1 && strNumber[1] == 1
                            ? (tempStr = "thirteen")
                            : (tempStr = "three" + tempStr);
                        break;
                    case "4":
                        index == 0 && strNumber.length > 1 && strNumber[1] == 1
                            ? (tempStr = "fourteen")
                            : (tempStr = "four" + tempStr);
                        break;
                    case "5":
                        index == 0 && strNumber.length > 1 && strNumber[1] == 1
                            ? (tempStr = "fifteen")
                            : (tempStr = "five" + tempStr);
                        break;
                    case "6":
                        index == 0 && strNumber.length > 1 && strNumber[1] == 1
                            ? (tempStr = "sixteen")
                            : (tempStr = "six" + tempStr);
                        break;
                    case "7":
                        index == 0 && strNumber.length > 1 && strNumber[1] == 1
                            ? (tempStr = "seventeen")
                            : (tempStr = "seven" + tempStr);
                        break;
                    case "8":
                        index == 0 && strNumber.length > 1 && strNumber[1] == 1
                            ? (tempStr = "eighteen")
                            : (tempStr = "eight" + tempStr);
                        break;
                    case "9":
                        index == 0 && strNumber.length > 1 && strNumber[1] == 1
                            ? (tempStr = "nineteen")
                            : (tempStr = "nine" + tempStr);
                        break;
                }
                if (tempStr) rezultStr.push(tempStr);
                break;
            case 1:
                switch (element) {
                    case "2":
                        tempStr = "twenty";
                        break;
                    case "3":
                        tempStr = "thirty";
                        break;
                    case "4":
                        tempStr = "forty";
                        break;
                    case "5":
                        tempStr = "fifty";
                        break;
                    case "6":
                        tempStr = "sixty";
                        break;
                    case "7":
                        tempStr = "seventy";
                        break;
                    case "8":
                        tempStr = "eighty";
                        break;
                    case "9":
                        tempStr = "ninety";
                        break;
                }
                if (tempStr) rezultStr.push(tempStr);
                break;

            default:
                break;
        }
    });

    return rezultStr.reverse().join(" ");
};
