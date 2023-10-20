// class ParentClass {
//     static staticMethod() {
//       console.log("This is a static method in the ParentClass.");
//     }
//    nMethod(){
//         console.log("This is a normal method.");
//       }
//   }

//       function nMethod() {
//       console.log("This is a function");
//     }
//   class ChildClass extends ParentClass {
//     // You don't need to redeclare the static method; it's automatically inherited.
//   }

//   ParentClass.staticMethod(); // Call the static method on the parent class
//   ChildClass.staticMethod(); // Call the static method on the child class
//  let child= new ChildClass();
//   child.nMethod();
//   nMethod();

// function numberGenerator() {
//     // Local “free” variable that ends up within the closure
//     var num = 1;
//     function checkNumber() {
//         console.log(num);
//     }
//     num++;
//     return checkNumber;
// }
// var number = numberGenerator();
// number();

// const students = [
//   { name: "Quincy", grade: [96, 89], courses: ["cs301", "cs303"] },
//   { name: "Jason", grade: [84, 91], courses: ["cs201", "cs203"] },
//   { name: "Alexis", grade: [89, 100], courses: ["cs105", "cs211"] },
//   { name: "Sam", grade: [84, 79], courses: ["cs445", "cs303"] },
//   { name: "Katie", grade: [67, 90], courses: ["cs303", "cs477"] },
// ];
// // students[students[0].name="jjkj"] ;
// //  console.log(students);

// // Create an object with names as keys and average grades as values for cs303 students
// const cs303StudentGrades = students
//   .filter((student) => student.courses.includes("cs303"))
//   .reduce((result, student) => {
//     result[student.name] = student.grade.reduce((acc, grade) => acc + grade, 0)/ student.grade.length;
//     return result;
//   }, {});

// const students = [
//   { name: "Quincy", grade: [96, 89], courses: ["cs301", "cs303"] },
//   { name: "Jason", grade: [84, 91], courses: ["cs201", "cs203"] },
//   { name: "Alexis", grade: [89, 100], courses: ["cs105", "cs211"] },
//   { name: "Sam", grade: [84, 79], courses: ["cs445", "cs303"] },
//   { name: "Katie", grade: [67, 90], courses: ["cs303", "cs477"] },
// ];

// const aveGrade = students.filter((student) =>
//   student.courses.includes("cs303")
// ).map(cur=>{
//   let average= cur.grade.reduce((result, e)=>result+e,0)/cur.grade.length;
// });
// console.log(aveGrade);

// let studentAnswers = [{qid:1, answer:'a'}, {qid:2, answer:'a'}, {qid:3, answer:'c'}]
// let correctAnswers = [{qid:1, answer:'a'}, {qid:2, answer:'a'}, {qid:3, answer:'a'}]

// function checkAnswer(studentAnswers, correctAnswers){
//     let count = 0;
//     for(let i=0; i<studentAnswers.length; i++){
//         for(let j=0; j<correctAnswers.length; j++){
//             if(studentAnswers[i].qid === correctAnswers[j].qid){
//                 if(studentAnswers[i].answer === correctAnswers[j].answer){
//                     count++;
//                 }
//                 break;
//             }
//         }
//     }
//     return count;
// }
// console.log(checkAnswer(studentAnswers, correctAnswers));

// const x=5;
// console.log(!x);
//  console.log(x);
//  console.log(!!x);

//  let userName = "John";
// function showMessage() {
// let userName = "Bob"; // declare a local variable
// let message = 'Hello, ' + userName; // Bob
// console.log(message);
// }
// showMessage();
// console.log( userName ); // John, unchanged

// let x = 10;
// function main() {
// let x;
// console.log("x1: " + x);
// if (x > 0) {
// let x = 30;
// console.log("x2: " + x);
// }
// x= 40;
// let f = function(x) { console.log("x3: " + x); }
// f(50);
// }
// main();

// function f(x) {
//     console.log("x: " + x);
//     }
//     f();
//     f(1);
//     f(2, 3);

// function log() {
//     console.log("No Arguments");
//     }
//     function log(x) {
//     console.log("1 Argument: " + x);
//     }
//     function log(x, y) {
//     console.log("2 Arguments: " + x + ", " + y);
//     }
//     log();
//     log(5);
//     log(6, 7);

// const x = {
//     a: 97,
//     'b': 98,
//     'c': 99,
//     'd': 199,
//     'mult': function(a, b) {
//     return a * b;
//     }
//     };

// let user = {
// name: "John",
// age: 30,
// isAdmin: true
// };
// for (let key in user) {
// // keys
// console.log( user.age ); // name, age, isAdmin
// // values for the keys
// console.log( user[key] ); // John, 30, true
// }

// let animal
// =
// {
// eats: true
// ,
// walk: function() {
// alert
// ("Animal walk");
// }
// };

// function log(e) {
//   console.log(e);
//   }
//   let arr = [1, 2, 3];
//   console.log("start")
//   setTimeout(() => arr.forEach(log));
//   console.log("end")

// function f() {
//   console.log("i am here " );
//   }
//   function f(x) {
//     console.log("x: " + x);
//     }
// f();
// f(1);
// f(2, 3);

// function log() {
//   console.log("No Arguments");
//   }

//   function log(x, y) {
//   console.log("2 Arguments: " + x + ", " + y);
//   }
//   function log(x) {
//     console.log("1 Argument: " + x);
//     }
//   log();
//   log(5);
//   log(6, 7);
//   let a="syrru";

//   const numbers = [1, 5, 18, 2,5, 77, 108];
//   console.log(numbers.findIndex(e=>e==5));

//   let options = {
//     title: "Menu",
//     width: 100,
//     height: 200
//     };
//     let { a, b,c } = options;
//     console.log(a);
//     console.log(b);
//     console.log(c);

//   const [first, , third] = ["foo", "bar", "baz", "foo"];
// console.log(first);
// console.log(third);

// let pt1 = {x:1 , y:2};
// let pt2 = {x:1 , y:2}; // two independent objects
// console.log(pt1 == pt2); // ??
// console.log(pt1 === pt2) // ??

// let timerId = setTimeout(() => console.log("never happens"), 1000);
// console.log(timerId); // timer identifier
// clearTimeout(timerId);
// console.log(timerId);

// let timerId = setInterval(() => console.log('tick'), 2000);
// console.log(setInterval);
// clearInterval(timerId);

// setTimeout(() => console.log("Hello"), 15);
// setTimeout(() => console.log("new1"), 5);
// setTimeout(() => console.log("new2"), 5);
// setTimeout(() => console.log("new3"), 10);
// setTimeout(() => console.log("new4"), 5);
// setTimeout(() => console.log("new5"), 5);
// setTimeout(() => console.log("new6"), 5);
// console.log("World");

// var x = 1;
// function foo() {
// let y = 2;
// function bar() {
// let z = 3;
// function baz() {
//   x=50;
//   if(true)
//   {
//     console.log(x);
//     var x=24;
//   }
// console.log(z);
// console.log(y);
// console.log(x);
// }
// console.log(x);
// baz();
// }
// bar();
// }
// foo();

// let user = {
// firstName: "John",
// sayHi() {
// console.log(this)
// console.log(`Hello, ${this.firstName}!`);
// }
// };
// user.sayHi(); //works
// setTimeout(user.sayHi, 2000); //problem! - this refers to window object
// setTimeout(user.sayHi.bind(user), 2000); //works
// setTimeout(user.sayHi.call(user), 2000); //works
// setTimeout(() => user.sayHi.apply(user), 2000); //works

// const me = {
// first: 'John',
// last: 'Smith',
// getFullName: function() {
// return this.first + ' ' + this.last;
// }
// };
// const log = function(height, weight) { // ‘this’ refers to the invoker
// console.log(this.getFullName() + height + ' ' + weight);
// }

// log.bind(me)('180cm', '70kg');
// const logMe = log.bind(me);
// logMe('180cm', '70kg'); // John Smith 180cm 70kg
// log.call(me, '180cm', '70kg'); // John Smith 180cm 70kg
// log.apply(me, ['180cm', '70kg']); // John Smith 180cm 70kg
// log.bind(me, '180cm', '70kg')(); // John Smith 180cm 70kg

// const user = {
// salute: ""
// ,
// greet: function() {
// this.salute = "Hello";
// console.log(this.salute); //Hello
// const setFrench = function(newSalute) { //inner function
// this.salute = newSalute;
// console.log(this.salute); //Bonjour??
// };
// setFrench("Bonjour");
// console.log(this.salute); //Bonjour??
// }
// };
// user.greet(); //Hello Hello ??

// let group = {
//   title: "Our Group",
//   students: ["John", "Pete", "Alice"],
//   showList: function() {
//   this.students.forEach(function(student) {
//   // error – ‘this’ is undefined (or window)
//   console.log(this.title + ": " + student);
//   },this);
//   }
//   };
//   group.showList();

// function Animal(name, speed) {
//   this.name = name;
//   this.speed = speed;
//   }
//   Animal.prototype.run = function (speed) {
//   this.speed += speed;
//   }
//   Animal.compareBySpeed = function (a1, a2) {
//   return a1.speed - a2.speed;
//   }
//   function Rabbit(name, speed) {
//   Animal.call(this, name, speed)
//   }
//   Rabbit.prototype.hide = function () {
//   console.log(this.name + " hides");
//   }
//   Object.setPrototypeOf(Rabbit, Animal);
//   Object.setPrototypeOf(Rabbit.prototype, Animal.prototype);
//   let rabbit1 = new Rabbit("Snopy", 10);
//   let rabbit2 = new Rabbit("Jerry", 15);
//   rabbit1.run(8);
//   rabbit1.hide();
//   let arr = [rabbit1, rabbit2].sort(Animal.compareBySpeed);
//   console.log(arr);

// const x = { a: 1, b: 2, add() { return this.a + this.b }
// }
// console.log(x.add()); //3
// const y = { a: 1, b: 2, add: () => {return this.a + this.b } }
// console.log(y.add()); //NaN

// function User(name) {
//   // this = {}; (implicitly)
//   // add properties to this
//   this.name = name;
//   this.isAdmin = false;
//   // return this; (implicitly)
//   }
//   console.log(new User('John'));

// function Rabbit(name) {this.name = name;}
// let animal = { eats:true };
// Rabbit.prototype = animal;
// let rabbit = new Rabbit("White rabbit");
// console.log(rabbit.constructor === Rabbit); // false
// let obj = {};
// console.log(Object.prototype); // false

// let obj = {
//   first: "Hello",
//   second: "world!",
//   length: 2,
//   };
//   obj.splice = Array.prototype.splice;
//   obj.splice(1,0) ; // Hello,world!
//   console.log( obj); // Hello,world!

// let animal = {
//   sleep: function(){
//   this.sleeping = true;
//   },
//   walk: function(){
//   if(!this.sleeping){
//   console.log('animal walking');
//   } else {
//   console.log('animal is sleeping');
//   }
//   }
//   }
//   rabbit = Object.create(animal);
//   rabbit = {
//   jump: true,
//   sleep: function(){
//   console.log('Sleeping!');
//   }
//   };

//   animal.eat = true;
//   console.log(rabbit.walk);

// class User {
//   #privatename;
//   constructor(name) {
//   this.name = name;
//   }
//   get name() {
//   // calls the setter
//   return this.#privatename; //property must match the name used in the setter
//   }
//   set name(value) {
//   if (value.length < 4) {
//   console.log("Name is too short.");
//   } else {
//   this.#privatename = value;
//   }
//   }
//   //must set a property name different from the setter name
//   }
//   let user = new User("John");
//   console.log(user.name); // calling the getter
//   user.name = 'Fred';
//   user2 = new User("b");
//   // calling the setter
//   // Name too short.
//   console.log(user2.name); // calling the getter

// class User {
//   constructor(name = "Anonymous") {
//     this.name = name;
//   }
//   sayHi() {
//     console.log(`Hello, ${this.name}!`);
//   }
// }
// fred = new User();
// console.log(fred);
// console.log(fred.proto);
// console.log(User.prototype);
// fred.sayHi();
// bob = new User("Bob");
// console.log(bob);
// bob.sayHi();

// class Animal {
//   constructor(name) {
//     this.speed = 0;
//     this.name = name;
//   }
//   run(speed) {
//     this.speed += speed;
//     console.log(`${this.name} runs with speed ${this.speed}.`);
//   }
//   stop() {
//     this.speed = 0;
//     console.log(`${this.name} stands still.`);
//   }
// }
// class Rabbit extends Animal {
//     constructor(name, earLength) {
//     super(name);
//     this.earLength = earLength;
//     }

//   hide() {
//     console.log(`${this.name} hides!`);
//   }
//   stop() {
//     super.stop(); // call parent stop
//     this.hide(); // and then hide
//   }
// }
// let rabbit = new Rabbit("White Rabbit");
// rabbit.run(5); // White Rabbit runs with speed 5.
// rabbit.hide(); // White Rabbit hides!
// rabbit.stop();

// class Article {
//   constructor(title, date) {
//     this.title = title;
//     this.date = date;
//   }
//   static compare(articleA, articleB) {
//     return articleA.date - articleB.date;
//   }
// }
// // usage
// let articles = [
//   new Article("HTML", new Date(2019, 1, 1)),
//   new Article("CSS", new Date(2019, 0, 1)),
//   new Article("JavaScript", new Date(2019, 11, 1)),
// ];
// articles.sort(Article.compare);
// console.log(articles); // CSS



// class Animal {
//   constructor(name, speed) {
//   this.speed = speed;
//   this.name = name;
//   }
//   run(speed = 0) {
//   this.speed += speed;
//   console.log(`${this.name} runs with speed ${this.speed}.`);
//   }
//   static compare(animalA, animalB) {
//   return animalA.speed - animalB.speed;
//   }
//   }
//   // Inherit from Animal
//   class Rabbit extends Animal {
//   hide() {
//   console.log(`${this.name} hides!`);
//   }
//   }
//   let rabbits = [
//   new Rabbit("White Rabbit", 10),
//   new Rabbit("Black Rabbit", 5)
//   ];
//   console.log(rabbits);
//   rabbits.sort(Rabbit.compare);
//   console.log(rabbits);
//   rabbits[0].run(); // Black Rabbit runs with speed 5.



x=5;
var a = 5;
var b = 10;
var c = function (a, b, c) {
console.log(x);
console.log(a);
var f = function (a, b, c) {
b = a;
console.log(b);
b = c;
 x = 3;
}
f(a, b, c);
console.log(b);
console.log(x);
}
c(8, 9, 10);
console.log(b);
console.log(x);
  

// var foo = 1;
// function bar() {
//  if (!foo) {
// var foo = 10;
// }
// console.log(foo)
// }
//  bar()
//  console.log(foo)