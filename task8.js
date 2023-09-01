function removeNumberStrings(input) {
    const filteredArray = input.filter(function (str) {
        return !/\d/.test(str);
    });
    return filteredArray;
}
const input = ["The ", "moon ", "1s ", "r0und ", "Earth2 "];
const resultArr = removeNumberStrings(input);
document.write("Task 8 : " + resultArr);
