function processObject(obj) {
    if (obj.hasOwnProperty('name')) {
        obj.hasName = true;
        delete obj.name;
    } else {
        obj.hasName = false;
    }
    return obj;
}
const inputObject1 = { name: 'Abcd', age: 20 };
const output1 = processObject(inputObject1);
console.log(output1); 

const inputObject2 = { age: 45 };
const output2= processObject(inputObject2);
console.log(output2); 

document.write("Task 5 : Console Output" + "</br>");