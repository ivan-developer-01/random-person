const personGenerator = {
	monthTextsJson: `{
	"1": "января",
	"2": "февраля",
	"3": "марта",
	"4": "апреля",
	"5": "мая",
	"6": "июня",
	"7": "июля",
	"8": "августа",
	"9": "сентября",
	"10": "октября",
	"11": "ноября",
	"12": "декабря"
}`,

	monthToText: function(month) {
		let data = JSON.parse(this.monthTextsJson);

		return data[month] || month;
	},

	get professionJson() {
		return `{
	"male": ${this.professionJsonMale},
	"female": ${this.professionJsonFemale}
}`;
	},

	professionJsonMale: `{
		"count": 10,
		"list": {
			"id_1": "IT-специалист",
            "id_2": "Сотрудник банка",
            "id_3": "Юрист",
            "id_4": "SMM-специалист",
            "id_5": "Строитель",
            "id_6": "Менеджер",
            "id_7": "Хирург",
            "id_8": "Специалист по продажам",
            "id_9": "Маркетолог",
            "id_10": "Бухгалтер"
		}
	}`,

	professionJsonFemale: `{
		"count": 10,
		"list": {
			"id_1": "Копирайтер",
            "id_2": "Графический дизайнер",
            "id_3": "Иллюстратор",
            "id_4": "Повар",
            "id_5": "Актриса",
            "id_6": "Интернет-маркетолог",
            "id_7": "Искусствовед",
            "id_8": "Парикмахер",
            "id_9": "Лингвист",
            "id_10": "Психолог"
		}
	}`,

    surnameJson: `{
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,

    firstNameMaleJson: `{
        "count": 10,
        "list": {
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,

    firstNameFemaleJson: `{
        "count": 10,
        "list": {
            "id_1": "Елена",
            "id_2": "Ольга",
            "id_3": "Дарья",
            "id_4": "София",
            "id_5": "Анастасия",
            "id_6": "Анна",
            "id_7": "Екатерина",
            "id_8": "Мария",
            "id_9": "Наталья",
            "id_10": "Светлана"
        }
    }`,

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    MIN_BIRTH_YEAR: 1970,
    MAX_BIRTH_YEAR: 2000,

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    randomFirstName: function() {
        let firstName;
        if (this.person?.gender === this.GENDER_MALE) {
            firstName = this.randomValue(this.firstNameMaleJson);
        } else if (this.person?.gender === this.GENDER_FEMALE) {
            firstName = this.randomValue(this.firstNameFemaleJson);
        }

        if (firstName) return firstName;
        else throw new Error("Bad script code!");
    },


    randomSurname: function() {
        let returnSurname = this.randomValue(this.surnameJson);
        if (this.person?.gender === this.GENDER_MALE) return returnSurname;
        else if (this.person?.gender === this.GENDER_FEMALE) return returnSurname + "а";

        throw new Error("Bad script code!");
    },

    randomGender: function() {
        return (Math.round(Math.random()) === 0) ? this.GENDER_MALE : this.GENDER_FEMALE;
    },

    randomBirthDate: function(isOnlyTwoDigits) {
		const year = this.randomIntNumber(this.MIN_BIRTH_YEAR, this.MAX_BIRTH_YEAR);
		const month = this.randomIntNumber(1, 12) - 1;

		let minDay = 1;
		let maxDay = 31; // Возможно, эта переменная поменяется в зависимости от месяца
		let day;

		switch (month) {
			case 0: // Январь
			case 2: // Март
			case 4: // Май
			case 6: // Июль
			case 7: // Август
			case 9: // Октябрь
			case 11: // Декабрь
				maxDay = 31;
				break;
			case 1: // Февраль
				// "Особый" случай
				let isLeapYear = ((year / 4) % 2) === 0;
				maxDay = isLeapYear ? 29 : 28;
				break;
			case 3: // Апрель
			case 5: // Июнь
			case 8: // Сентябрь
			case 10: // Ноябрь
				maxDay = 30;
				break;

			/* Всё правильно, тут индексация месяцев не 1-12, а 0-11, поэтому так */
		}

		day = this.randomIntNumber(minDay, maxDay);

		let monthString = month;
		monthString = this.monthToText(month);

		let dayString = day;
		if (isOnlyTwoDigits) {
			if (day >= 1 && day <= 9) dayString = "0" + day.toString();
		}

		const finalBirthDate = `${dayString} ${monthString}, ${year} года`;

        return finalBirthDate;
    },

	randomPatronymic: function() {
		let returnPatronymic = "";

		let randomName = this.randomValue(this.firstNameMaleJson);

		if (this.person?.gender === this.GENDER_MALE) {
			let tmpPatronymic = "";

			console.log(randomName, randomName.endsWith("й"));

			if (randomName.endsWith("й"))
				tmpPatronymic = randomName.slice(0, randomName.length - 1) + "евич";
			else if (randomName.endsWith("а"))
				tmpPatronymic = randomName.slice(0, randomName.length - 1) + "ович";
			else tmpPatronymic = randomName + "ович";

			returnPatronymic = tmpPatronymic;
		} else if (this.person?.gender === this.GENDER_FEMALE) {
			let tmpPatronymic = "";

			console.log(randomName, randomName.endsWith("й"));

			if (randomName.endsWith("й"))
				tmpPatronymic = randomName.slice(0, randomName.length - 1) + "евна";
			else if (randomName.endsWith("а"))
				tmpPatronymic = randomName.slice(0, randomName.length - 1) + "овна";
			else tmpPatronymic = randomName + "овна";

			returnPatronymic = tmpPatronymic;
		}

		if (returnPatronymic) return returnPatronymic;

		throw new Error("Bad script code!");
	},

	randomProfession: function() {
		let professionJson = JSON.parse(this.professionJson);
		professionJson.male = JSON.stringify(professionJson.male);
		professionJson.female = JSON.stringify(professionJson.female);
		let returnProfession = "";

		if (this.person?.gender === this.GENDER_MALE) {
			returnProfession = this.randomValue(professionJson.male);
		} else if (this.person?.gender === this.GENDER_FEMALE) {
			returnProfession = this.randomValue(professionJson.female);
		}

		if (returnProfession) return returnProfession;

		throw new Error("Bad script code!");
	},


    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName();
        this.person.surname = this.randomSurname();
        this.person.birthDate = this.randomBirthDate(false);
		this.person.patronymic = this.randomPatronymic();
		this.person.profession = this.randomProfession();
        return this.person;
    }
};
