for (let number = 10; number <= 60; number++) {
    if (number % 3 === 0 && number % 5 === 0) {
        console.log("Both");
    } else if (number % 3 === 0) {
        console.log("Multiple of 3");
    } else if (number % 5 === 0) {
        console.log("Multiple of 5");
    } else {
        console.log(number);
    }
}
