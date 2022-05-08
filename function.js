function gpacal(marks) {
    let gpa = '';
    if (marks >= 0 && marks <= 33) {
        gpa = 0;
    } else if (marks >= 33 && marks <= 39) {
        gpa = 1;
    } else if (marks >= 40 && marks <= 49) {
        gpa = 2;
    } else if (marks >= 50 && marks <= 69) {
        gpa = 3;
    } else if (marks >= 60 && marks <= 79) {
        gpa = 3;
    } else if (marks >= 70 && marks <= 89) {
        gpa = 4;
    } else if (marks >= 80 && marks <= 100) {
        gpa = 5; 
    }
    return gpa;
}
function gradecal(marks) {
    let grade = '';
    if (marks >= 0 && marks <= 33) {
        grade = "F";
    } else if (marks >= 33 && marks <= 39) {
        grade = "D";
    } else if (marks >= 40 && marks <= 49) {
        grade = "F";
    } else if (marks >= 50 && marks <= 69) {
        grade = "B";
    } else if (marks >= 60 && marks <= 79) {
        grade = "A-";
    } else if (marks >= 70 && marks <= 89) {
        grade = "A";
    } else if (marks >= 80 && marks <= 100) {
        grade = "A+";
    }
    return grade;
}