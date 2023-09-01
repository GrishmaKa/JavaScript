function largeststring(string1, string2) {
    const word1 = string1.split(/\s+/).filter(word => word !== '');
    const word2 = string2.split(/\s+/).filter(word => word !== '');
    if (word1.length > word2.length) {
        return string1;
    } else {
        return string2;
    }
}
const string1 = "This is the larger string in this case";
const string2 = "I am another string";
const resultString = largeststring(string1, string2);
document.write("Task 4 : " + resultString + "</br>");