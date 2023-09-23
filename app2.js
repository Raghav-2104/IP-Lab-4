class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

class Student extends Person {
    constructor(name, age, rollNo) {
        super(name, age);
        this.rollNo = rollNo;
    }

    introduce() {
        console.log(`Hi, my name is ${this.name}, I am ${this.age} years old and my roll number is ${this.rollNo}.`);
    }

    validateRollNo() {
        try {
            if (this.rollNo === 0) {
                throw new Error('Invalid roll number entered.');
            }
        } catch (error) {
            console.error(error.message);
        }
    }
}

const student1 = new Student('Raghav', 20, 41);
student1.introduce(); 

const student2 = new Student('Yash', 19, 0);
student2.validateRollNo(); 