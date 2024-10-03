// Task 1 declare variables for student information

let studentName1;
let studentAge1;
let studentGrade1;
let studentAttendance1;
let studentName2;
let studentAge2;
let studentGrade2;
let studentAttendance2;
// Variables declared without assigning a value (to be done in task 2) so value is currently undefined

// Task 2 Assign values to student information variables
studentName1 = "Adam Smith";
studentAge1 = 20;
studentGrade1 = 14;
studentAttendance1 = true;
studentName2 = "David Hume";
studentAge2 = 19;
studentGrade2 = 13;
studentAttendance2 = true;
// Values assigned to each declared variable

// Task 3 Console.log statements for each variable
function studentName(nameInput) {
    console.log("Student Name: " +nameInput)
};
function studentAge(ageInput) {
    console.log(`Student Age: ${ageInput}`)
};
function studentGrade(gradeInput) {
    console.log(`Student Grade: ${gradeInput}`)
};
function studentAttendance(attendanceInput) {
    console.log(`Student Attendance: ${attendanceInput}`)
};
studentName(studentName1);
studentName(studentName2);
studentAge(studentAge1);
studentAge(studentAge2);
studentGrade(studentGrade1);
studentGrade(studentGrade2);
studentAttendance(studentAttendance1);
studentAttendance(studentAttendance2);
// Calling each function with each of our variable plugged in to run console.log statements
