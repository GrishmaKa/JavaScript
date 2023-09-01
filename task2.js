function get_words(inputString, character) {
    const lowerInputString = inputString.toLowerCase();
    const words = lowerInputString.split(/\s+/);
    const result = [];
    for (const word of words) {
        if (word.length > 0 && word[0] === character.toLowerCase()) {
            result.push(word);
        }
    }
    return result;
}
const words1 = get_words("I see oranges in the orchard", "o");
document.write("Task 2 : Result 1 => " + words1 + "</br>");

const words2 = get_words("Hi my name is Henry", "H");
document.write("Task 2 : Result 2 => " + words2 + "</br>");
