
let iconBx = document.querySelectorAll('.iconBx');
let contentBx = document.querySelectorAll('.contentBx');

for (var i = 0; i < iconBx.length; i++) {
    iconBx[i].addEventListener('mouseover', function () {
        for (var i = 0; i < contentBx.length; i++) {
            contentBx[i].className = 'contentBx';
        }
        document.getElementById(this.dataset.id).className = 'contentBx active';

        for (var i = 0; i < iconBx.length; i++) {
            iconBx[i].className = 'iconBx';
        }
        this.className = 'iconBx active';
    });
}

function clearForm(oForm) {
    var elements = oForm.elements;
    oForm.reset();
    for (i = 0; i < elements.length; i++) {
        field_type = elements[i].type.toLowerCase();
        switch (field_type) {
            case "text":
            default:
                break;
        }
    }
}

let processInput = document.getElementById("process-input");

processInput.addEventListener("click", function (event) {
    this.innerHTML = "Give it another go?";
})

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

        let home = ['Mansion', 'Apartment', 'Shack', 'House'];
        let homeValue = home[Math.floor(Math.random() * 4)];
        let salary = ['$100', '$100,000', '$1,000,000', '$100,000,000'];
        let salaryValue = salary[Math.floor(Math.random() * 4)];
        let numOfKids = Math.floor(Math.random() * 10);

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




