function getLargest(a, b, c) {
    if (a >= b && a >= c) {
        return a;
    } else if (b >= a && b >= c) {
        return b;
    } else {
        return c;
    }
}
const largest = getLargest(4, 20, 40);
document.write("<p>Task 1 : The largest numberber is " + largest + "</p>");
