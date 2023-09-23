class Person {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    getAge = () => {
        return this.age;
    }
}

const printDetails = (person) => {
    console.log(`Name: ${person.name}, Age: ${person.age}, Gender: ${person.gender}`);
}

const person1 = new Person("John", 25, "Male");

console.log(person1.getAge()); 
printDetails(person1);