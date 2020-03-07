
// Set user input to array and set random values.
function chooseSpouse() {
    let spouse1 = document.querySelector("input[name = 'spouse-input']");
    let spouse2 = document.querySelector("input[name = 'spouse-input1']");
    let spouse3 = document.querySelector("input[name = 'spouse-input2']");
    let spouse = [(spouse1), (spouse2), (spouse3)];
    return (spouse[Math.floor(Math.random() * 3)]);
}

function chooseCar() {
    let car1 = document.querySelector("input[name = 'car-input']");
    let car2 = document.querySelector("input[name = 'car-input1']");
    let car3 = document.querySelector("input[name = 'car-input2']");
    let cars = [(car1), (car2), (car3)];
    return (cars[Math.floor(Math.random() * 3)]);
}

function chooseOccupation() {
    let occupation1 = document.querySelector("input[name = 'occupation-input']");
    let occupation2 = document.querySelector("input[name = 'occupation-input1']");
    let occupation3 = document.querySelector("input[name = 'occupation-input2']");
    let occupations = [(occupation1), (occupation2), (occupation3)];
    return (occupations[Math.floor(Math.random() * 3)]);
}
// Set remaining values for prediction.
function setHome() {
    let home = ['Mansion', 'Apartment', 'Shack', 'House'];
    return (home[Math.floor(Math.random() * 4)]);
}

function setKids() {
    let numOfKids = Math.floor(Math.random() * 10);
    return (numOfKids);
}

function setSalary() {
    let salary = ['$0', '$100', '$40,000', '$75,000', '$100,000', '$1,000,000', '$100,000,000'];
    return (salary[Math.floor(Math.random() * 7)]);
}

// Event listener to set prediction values and display to user.
document.addEventListener('DOMContentLoaded', (event) => {
    document.addEventListener('submit', (event) => {
        event.preventDefault();

        let spouseValue = chooseSpouse();
        let carValue = chooseCar();
        let occupationValue = chooseOccupation();
        let salaryValue = setSalary();
        let homeValue = setHome();
        let numOfKids = setKids();

        let displayOutput1 = document.getElementById("display-output1");
        let displayOutput2 = document.getElementById("display-output2");
        let displayOutput3 = document.getElementById("display-output3");
        let displayOutput4 = document.getElementById("display-output4");
        let displayOutput5 = document.getElementById("display-output5");
        let displayOutput6 = document.getElementById("display-output6");

        displayOutput1.innerHTML = homeValue;
        displayOutput2.innerHTML = spouseValue.value;
        displayOutput3.innerHTML = numOfKids;
        displayOutput4.innerHTML = carValue.value;
        displayOutput5.innerHTML = occupationValue.value;
        displayOutput6.innerHTML = salaryValue;
    });
});

// Style methods for icon and content boxes.
let iconBx = document.querySelectorAll('.iconBx');
let contentBx = document.querySelectorAll('.contentBx');

for (let i = 0; i < iconBx.length; i++) {
    iconBx[i].addEventListener('mouseover', function () {
        for (let i = 0; i < contentBx.length; i++) {
            contentBx[i].className = 'contentBx';
        }
        document.getElementById(this.dataset.id).className = 'contentBx active';

        for (let i = 0; i < iconBx.length; i++) {
            iconBx[i].className = 'iconBx';
        }
        this.className = 'iconBx active';
    });
}

// Modify button text after click events.
function updateButton() {
    let text1 = "Give it another go?";
    document.getElementById("process-input").innerHTML = text1;
}

function resetButton() {
    let text1 = "Reveal your future";
    document.getElementById("process-input").innerHTML = text1;
}

// Clear text fields and update button text.
function clearForm(oForm) {
    let elements = oForm.elements;
    oForm.reset();
    for (i = 0; i < elements.length; i++) {
        field_type = elements[i].type.toLowerCase();
        switch (field_type) {
            case "text":
            default:
                break;
        }
        resetButton();
    }
}


