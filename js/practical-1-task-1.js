function percentageCalculator(number, percentage) {
  let onePercent = number / 100;
  let totalPercentage = onePercent * percentage;
  return totalPercentage;
}

let percentage = percentageCalculator(50, 10);
console.log(percentage);
percentage = percentageCalculator(50, 50);
console.log(percentage);
percentage = percentageCalculator(50, 100);
console.log(percentage);
