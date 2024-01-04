

// const multiplication = (num1 , num2) => num1 * num2;



// console.log(multiplication(3, 4));

const student = {
    name: 'Mayur',
    age: 28,
    greet() {
        console.log('Hi, I am a student and my name is ' + this.name + ' and My age is ' + this.age);
    }
}

const student2 = {...student };

if (student === student2) {
    console.log("same object");
} else {
    console.log("Different object");
}

const student3 = { ...student, name: 'Sunil' };

console.log(student);
console.log(student3);

// student.greet();