// scenario of a salary increment based on the bracker of current slaray
// if the current salary is less than $5KCthenincrement the salary by $1K
// if the current salary is greater and less than equal to #10K, increase the salary by $700
// if the current salary is greater than #10K, increase the salary by $500

let currentSalary = 2000;
if (currentSalary < 5000) {
  currentSalary += 1000;
} else if (currentSalary > 5000 && currentSalary <= 10000) {
  currentSalary += 700;
} else {
  currentSalary += 500;
}
console.log(currentSalary);
