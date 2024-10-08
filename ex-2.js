//Exercise #2: At Least Five Function

function atLeastFive(array, operation) {
  // Start coding here
  let countAbove70 = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 70) {
      countAbove70++;
    }
  }
  return operation(countAbove70);
}

const studentScoresRoom1 = [90, 40, 67, 80, 100, 15, 86, 12, 99, 67];
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];

// Using `atLeastFive` function here

let scoreRoom1Result = atLeastFive(studentScoresRoom1, function (countAbove70) {
  if (countAbove70 >= 5) {
    return "ผ่านเกณฑ์ ✅";
  } else {
    return "ไม่ผ่านเกณฑ์ ❌";
  }
});
console.log(scoreRoom1Result);

let scoreRoom2Result = atLeastFive(studentScoresRoom2, function (countAbove70) {
  if (countAbove70 >= 5) {
    return "ผ่านเกณฑ์ ✅";
  } else {
    return "ไม่ผ่านเกณฑ์ ❌";
  }
});
console.log(scoreRoom2Result);

let scoreRoom3Result = atLeastFive(studentScoresRoom3, function (countAbove70) {
  if (countAbove70 >= 5) {
    return "ผ่านเกณฑ์ ✅";
  } else {
    return "ไม่ผ่านเกณฑ์ ❌";
  }
});
console.log(scoreRoom3Result);
