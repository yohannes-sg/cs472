class Student {
  constructor(studentId) {
    this.studentId = studentId;
    this.studentAnswer = new Array();
  }

  addAnswer(sAnswer) {
    this.studentAnswer.push(sAnswer);
  }
}

class Question {
  constructor(qid, answer) {
    this.qid = qid;
    this.answer = answer;
  }

  checkAnswer(sAnswer) {
    if (this.answer === sAnswer) return true;
    else return false;
  }
}

class Quiz {
  constructor(correctAnswer, students) {
    this.answeres = new Map();
    for (const answer of correctAnswer) {
      this.answeres.set(answer.qid, answer.answer);
    }
    this.students = students;
  }

  scoreStudentBySid(sid) {
    let counter = 0;
    let ans = this.students.find(
      (element) => element.studentId == sid
    ).studentAnswer;
    for (const a of ans) {
      for (const answere of this.answeres) {
        if (a.qid === answere[0] && a.checkAnswer(answere[1])) counter++;
      }
    }
    return counter;
  }

  getAverageScore() {}
}

const student1 = new Student(10);
student1.addAnswer(new Question(2, "a"));
student1.addAnswer(new Question(3, "b"));
student1.addAnswer(new Question(1, "b"));
const student2 = new Student(11);
student2.addAnswer(new Question(3, "b"));
student2.addAnswer(new Question(2, "a"));
student2.addAnswer(new Question(1, "d"));
const students = [student1, student2];
const questions = [
  new Question(1, "b"),
  new Question(2, "a"),
  new Question(3, "b"),
];
const quiz = new Quiz(questions, students);
let scoreforStudent10 = quiz.scoreStudentBySid(10);
console.log(scoreforStudent10); //Expected Result: 3
let scoreforStudent11 = quiz.scoreStudentBySid(11);
console.log(scoreforStudent11); //Expected Result: 2
let average = quiz.getAverageScore();
console.log(average); //Expected Reuslt: 2.5
