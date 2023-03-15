// const averageExams = (valuesExam) => {
//   const numberValidation = valuesExam.every((exam) => typeof exam === "number");
//   if (!numberValidation) throw Error("please input number");

//   const sumValues = valuesExam.reduce(
//     (accumulator, currentValue) => accumulator + currentValue,
//     0
//   );
//   return sumValues / valuesExam.length;
// };

// const isStudentPassExam = (valuesExam, name) => {
//   const minValues = 75;
//   const average = averageExams(valuesExam);

//   if (average > minValues) {
//     console.log(`${name} pass the exams`);
//     return true;
//   } else {
//     console.log(`${name} fail the exams`);
//     return false;
//   }
// };

// module.exports = { averageExams, isStudentPassExam };

function minMax(arrayOfNumbers) {
  let currentMin = arrayOfNumbers[0];
  let currentMax = arrayOfNumbers[0];
  for (value of arrayOfNumbers) {
      if (value < currentMin) {
          currentMin = value;
      } else if (value > currentMax) {
          currentMax = value;
      }
  }

  console.log(`currentMin: ${currentMin}, currentMax: ${currentMax}`);
}

minMax([8, -6, 0, 9, 40, 2, 23, 50, 2, -3, -15, 15, -23, 71]);