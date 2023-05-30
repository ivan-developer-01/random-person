window.onload = function() {
    const initPerson = personGenerator.getPerson();

    const firstNameElem = document.querySelector("#firstNameOutput");
    const surnameElem = document.querySelector("#surnameOutput");
    const genderOutput = document.querySelector("#genderOutput");

    firstNameElem.innerText = initPerson.firstName;
    surnameElem.innerText = initPerson.surname;
};
