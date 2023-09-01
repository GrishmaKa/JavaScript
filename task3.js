function removeItems(array, n) {
    if (array.length >= n) {
        return array.slice(0, array.length - n);
    } else {
        return array;
    }
}
const inputArray = [3, 4, 6, 7, 8, 6];
const result = removeItems(inputArray, 3);
document.write("Task 3 : " + result + "</br>");

