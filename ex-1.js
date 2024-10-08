// Exercise #1: For Each Function

//function forEach(array, operation) {
  // Start coding here
//}

const employeeSalaries = [20005, 40000, 32000, 14500, 344000];
const newEmployeeSalaries = [];
// loop ค่าใน employeeSalaries ก่อน
function newSalaries(array,operation){
for (let i = 0; i < array.length; i++) {
  operation(array[i])
  //console.log(array)
}
//เอาค่าที่ได้มา+5000
}
function operation (salary){
  //console.log(salary)
  newEmployeeSalaries.push(salary+5000)
  
}

// Using `forEach` function here
newSalaries(employeeSalaries,operation);
console.log(newEmployeeSalaries); // [25005, 45000, 37000, 19500, 349000]
