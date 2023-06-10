window.onload = function() {
    const initPerson = personGenerator.getPerson();

    const firstNameElem = document.querySelector("#firstNameOutput");
    const surnameElem = document.querySelector("#surnameOutput");
    const genderOutput = document.querySelector("#genderOutput");
    const yearOutputElem = document.querySelector("#birthYearOutput");

    firstNameElem.innerText = initPerson.firstName;
    surnameElem.innerText = initPerson.surname;
	genderOutput.innerText = initPerson.gender;
    yearOutputElem.innerText = initPerson.birthYear;
};
