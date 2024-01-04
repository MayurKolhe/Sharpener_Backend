

const multiplication = (num1 , num2) => num1 * num2;



console.log(multiplication(3, 4));

const student = {
    name: 'Mayur',
    age: 28,
    greet() {
        console.log('Hi, I am a student and my name is ' + this.name + ' and My age is ' + this.age);
    }
}

student.greet();