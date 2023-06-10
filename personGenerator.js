const personGenerator = {
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

	patronymicJsonMale: `{
		"count": 15,
		"list": {
			"id_1": "Демидович",
            "id_2": "Алексеевич",
            "id_3": "Родионович",
            "id_4": "Даниилович",
            "id_5": "Петрович",
            "id_6": "Иванович",
            "id_7": "Сергеевич",
            "id_8": "Дмитриевич",
            "id_9": "Степанович",
            "id_10": "Александрович",
            "id_11": "Михайлович",
            "id_12": "Андреевич",
            "id_13": "Фёдорович",
            "id_14": "Олегович",
            "id_15": "Егорович",
            "id_16": "Артёмович"
		}
	}`,

	patronymicJsonFemale: `{
		"count": 15,
		"list": {
			"id_1": "Артуровна",
            "id_2": "Михайловна",
            "id_3": "Артёмовна",
            "id_4": "Вадимовна",
            "id_5": "Константиновна",
            "id_6": "Леонидовна",
            "id_7": "Егоровна",
            "id_8": "Михайловна",
            "id_9": "Святославна",
            "id_10": "Алексеевна",
            "id_11": "Арсентьева",
            "id_12": "Кирилловна",
            "id_13": "Дмитриевна",
            "id_14": "Егоровна",
            "id_15": "Владимировна",
            "id_16": "Тимофеевна"
		}
	}`,
	
	get patronymicJson() {
		return `{
	"male": ${this.patronymicJsonMale},
	"female": ${this.patronymicJsonFemale}
}`;
	},

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

    randomBirthYear: function() {
        return this.randomIntNumber(this.MIN_BIRTH_YEAR, this.MAX_BIRTH_YEAR);
    },

	randomPatronymic: function() {
		let patronymicJson = JSON.parse(this.patronymicJson);
		patronymicJson.male = JSON.stringify(patronymicJson.male);
		patronymicJson.female = JSON.stringify(patronymicJson.female);
		let returnPatronymic = "";

		if (this.person?.gender === this.GENDER_MALE) {
			returnPatronymic = this.randomValue(patronymicJson.male);
		} else if (this.person?.gender === this.GENDER_FEMALE) {
			returnPatronymic = this.randomValue(patronymicJson.female);
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
        this.person.birthYear = this.randomBirthYear();
		this.person.patronymic = this.randomPatronymic();
		this.person.profession = this.randomProfession();
        return this.person;
    }
};
