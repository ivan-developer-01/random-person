window.onload = function() {
    const initPerson = personGenerator.getPerson();

    const firstNameElem = document.querySelector("#firstNameOutput");
    const surnameElem = document.querySelector("#surnameOutput");
	const patronymicOutput = document.querySelector("#patronymicOutput");
	const professionOutput = document.querySelector("#professionOutput");
    const genderOutput = document.querySelector("#genderOutput");
    const yearOutputElem = document.querySelector("#birthYearOutput");

    firstNameElem.innerText = initPerson.firstName;
    surnameElem.innerText = initPerson.surname;
	patronymicOutput.innerText = initPerson.patronymic;
	professionOutput.innerText = initPerson.profession;
	genderOutput.innerText = initPerson.gender;
    yearOutputElem.innerText = initPerson.birthYear;
};
