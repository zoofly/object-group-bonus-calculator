const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

for (let i=0; i<employees.length; i++){
  console.log(`Name: ${employees[i].name}, Employee Number: ${employees[i].employeeNumber} , Annual Salary: ${employees[i].annualSalary} , Review: ${employees[i].reviewRating}`)
}
console.log( employees );

function bonuses(employee){
 switch (employee.reviewRating) {
  case 5:
    //do something is review rating =5
    bonusPercentage = employee.annualSalary * .10
    totalComp = parseInt(employee.annualSalary) + bonusPercentage
    break;
  case 4:
    bonusPercentage = employee.annualSalary * .06
    totalComp = parseInt(employee.annualSalary) + bonusPercentage
    break;
  case 3:
    bonusPercentage = employee.annualSalary * .04
    totalComp = parseInt(employee.annualSalary) + bonusPercentage
    break;

  default: 
  bonusPercentage = employee.annualSalary * 0
  totalComp = parseInt(employee.annualSalary) + bonusPercentage
    break;
  }
  for (let i=0; i<employees.length; i++){
    console.log(`Name: ${employee.name}, Bonus based on rating: ${bonusPercentage} , Total Compensation: ${totalComp}`);
  }
  return totalComp;
}

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log(bonuses(employees[2]));
console.log(bonuses(employees[4]));

