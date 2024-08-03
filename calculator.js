
// Get id

let add = function (number1, number2) {
     
    return (number1 + number2);
}

let substract = function (number1, number2) {
     
    return (number1 - number2);
}

let multiply = function (number1, number2) {
     
    return (number1 * number2);
}
let divide = function (number1, number2) {
     
    return (number1 / number2);
}

document.getElementById('subtract').addEventListener('click', function () {
    let number1 = parseFloat(document.getElementById('number1').value) || 0;
    let number2 = parseFloat(document.getElementById('number2').value) || 0;
    const result = substract(number1, number2);
    document.getElementById('calculation-result').textContent = result;
});

document.getElementById('add').addEventListener('click', function () {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    const result = add(number1, number2);
    document.getElementById('calculation-result').textContent = result;
});

document.getElementById('multiply').addEventListener('click', function () {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    const result = multiply(number1, number2);
    document.getElementById('calculation-result').textContent = result;
});

document.getElementById('divide').addEventListener('click', function () {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    const result = divide(number1, number2);
    document.getElementById('calculation-result').textContent = result;
});

