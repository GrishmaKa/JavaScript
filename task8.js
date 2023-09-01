function removeNumberStrings(input) {
    const filteredArray = input.filter(function (str) {
        return !/\d/.test(str);
    });
    return filteredArray;
}
const input = ["This ", "is ", "a3 ", "samp7e ", "stri9ng "];
const resultArr = removeNumberStrings(input);
document.write("Task 8 : " + resultArr);
