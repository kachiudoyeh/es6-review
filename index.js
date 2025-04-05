import { Student, resolveAfter2Seconds, grades } from "./tools.js";

// Create Student
const student = new Student("Kachi", 200, "ISMS");
console.log(student)

// Change student level
student.setLevel(300);
console.log(student);

// Async/Await
const slow = await resolveAfter2Seconds();
console.log(slow)

grades.set("ISM102", "A");
grades.set("ISM202", "A");
