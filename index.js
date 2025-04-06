import { Student, resolveAfter2Seconds, grades, Course } from "./tools.js";

// Create Student
const student = new Student("Kachi", 200, "ISMS");
console.log(student)

const ism210 = new Course("Mobile based technology", "ISM210")

// Assign student course
let courses = [ism210]
student.setCourses(courses);

// Change student level
student.setLevel(300);
console.log(student);

// Async/Await
const slow = await resolveAfter2Seconds();
console.log(slow)

grades.set("ISM102", "A");
grades.set("ISM202", "A");

console.log(grades)