window.onload = function() {
	
	const firstNameElem = document.querySelector("#firstNameOutput");
    const surnameElem = document.querySelector("#surnameOutput");
	const patronymicOutput = document.querySelector("#patronymicOutput");
	const professionOutput = document.querySelector("#professionOutput");
    const genderOutput = document.querySelector("#genderOutput");
    const birthDateOutputElem = document.querySelector("#birthDateOutput");

	const initials = {
		surname: "Генерация фамилии",
		firstName: "Генерация имени",
		patronymic: "Генерация отчества",
		profession: "Генерация профессии",
		gender: "Генерация пола",
		birthDate: "Генерация даты рождения"
	};

	function generate() {
		const initPerson = personGenerator.getPerson();

		firstNameElem.innerText = initPerson.firstName;
		surnameElem.innerText = initPerson.surname;
		patronymicOutput.innerText = initPerson.patronymic;
		professionOutput.innerText = initPerson.profession;
		genderOutput.innerText = initPerson.gender;
		birthDateOutputElem.innerText = initPerson.birthDate;
	}

	generate();

	const clearButton = document.querySelector("#clear-button");
	const generateButton = document.querySelector("#generate-button");

	clearButton.addEventListener("click", () => {
		firstNameElem.innerText = initials.firstName;
		surnameElem.innerText = initials.surname;
		patronymicOutput.innerText = initials.patronymic;
		professionOutput.innerText = initials.profession;
		genderOutput.innerText = initials.gender;
		birthDateOutputElem.innerText = initials.birthDate;
	});

	generateButton.addEventListener("click", generate);
};
