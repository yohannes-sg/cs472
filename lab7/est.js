
// let group = {
// title: "Our Group",
// students: ["John", "Pete", "Alice"],
// showList: function() {
// this.students.forEach(function(student) {
// // error – ‘this’ is undefined (or window)
// console.log(this.title + ": " + student);
// });
// }
// };
// group.showList;

// const me = {
// first: 'John',
// last: 'Smith',
// getFullName: function() {
// return this.first + ' ' + this.last;
// }
// }
// const log = function(height, weight) { // ‘this’ refers to the invoker
// console.log(this.getFullName() + ' ' + height + ' ' + weight);
// }
// //const logMe = log.bind(me);
// log('180cm', '70kg'); // John Smith 180cm 70kg
// log.call(me, '180cm', '70kg'); // John Smith 180cm 70kg
// log.apply(me, ['180cm', '70kg']); // John Smith 180cm 70kg
// log.bind(me, '180cm', '70kg')(); // John Smith 180cm 70kg

; 