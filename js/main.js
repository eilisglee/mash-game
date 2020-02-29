

document.addEventListener('DOMContentLoaded', (event) => {
    document.addEventListener('submit', (event) => {
        event.preventDefault();

        let spouse1 = document.querySelector("input[name = 'spouse-input']");
        let spouse2 = document.querySelector("input[name = 'spouse-input1']");
        let spouse3 = document.querySelector("input[name = 'spouse-input2']");
        let spouse = [(spouse1), (spouse2), (spouse3)];
        let spouseValue = spouse[Math.floor(Math.random() * 3)];

        let car1 = document.querySelector("input[name = 'car-input']");
        let car2 = document.querySelector("input[name = 'car-input1']");
        let car3 = document.querySelector("input[name = 'car-input2']");
        let cars = [(car1), (car2), (car3)];
        let carValue = cars[Math.floor(Math.random() * 3)];

        let occupation1 = document.querySelector("input[name = 'occupation-input']");
        let occupation2 = document.querySelector("input[name = 'occupation-input1']");
        let occupation3 = document.querySelector("input[name = 'occupation-input2']");
        let occupations = [(occupation1), (occupation2), (occupation3)];
        let occupationValue = occupations[Math.floor(Math.random() * 3)];


        let home = ['mansion', 'apartment', 'shack', 'house'];
        let homeValue = home[Math.floor(Math.random() * 4)];

        let salary = ['$100', '$100,000', '$1,000,000', '$100,000,000'];
        let salaryValue = salary[Math.floor(Math.random() * 4)];

        let numOfKids = Math.floor(Math.random() * 10);

        // let processInput = document.getElementById("process-input");
        let displayOutput = document.getElementById("display-output");

        displayOutput.innerHTML = "You will marry " + spouseValue.value + " and together you'll have " + numOfKids + " kids and live in a " + homeValue + ". You'll drive a " + carValue.value + " and work as a " + occupationValue.value + ", earning a salary of " + salaryValue + " per year.";
    });
});



