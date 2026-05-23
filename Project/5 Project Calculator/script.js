const interest = document.getElementById('interest');
const BMI = document.getElementById('BMI');
const calcCalories = document.getElementById('calcCalories');



interest.addEventListener('submit', e => {
    e.preventDefault();
    let p = document.getElementById("p").value;
    let r = document.getElementById("r").value;
    let t = document.getElementById("t").value;

    let si = (p * r * t) / 100;

    document.getElementById("siResult").innerText =
        "Simple Interest = ₹" + si;

    e.target.reset();
});




BMI.addEventListener("submit", e => {
    e.preventDefault();

    let w = document.getElementById("weight").value;
    let h = document.getElementById("height").value;

    let bmi = w / (h * h);

    document.getElementById("bmiResult").innerText =
        "BMI = " + bmi.toFixed(2);
    e.target.reset();
});



calcCalories.addEventListener('submit', e => {
    e.preventDefault();
    let age = document.getElementById("age").value;
    let weight = document.getElementById("w").value;
    let height = document.getElementById("h").value;

    let calories = 10 * weight + 6.25 * height - 5 * age + 5;

    document.getElementById("calResult").innerText =
        "Calories = " + calories.toFixed(2) + " kcal";

    e.target.reset();
});




// calculator


let display = document.getElementById("display");

function appendValue(value) {
    if (display.value === 'Error') {
        display.value = '';
    }
    display.value += value;
};

function calculate() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = 'Error';
    }
}

function clearDisplay() {
    display.value = '';
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
};
