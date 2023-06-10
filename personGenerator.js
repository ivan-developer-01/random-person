const personGenerator = {
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


    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName();
        this.person.surname = this.randomSurname();
        this.person.birthYear = this.randomBirthYear();
        return this.person;
    }
};
