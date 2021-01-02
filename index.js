const height = 191;
const weight = 93;
const bmi = weight / (height/100 * 2);

console.log(bmi);

if (bmi < 18.5) {
	console.log("You're underweight!");
} else if (bmi > 18.5 && bmi < 24.9) {
	console.log("You're normal weight!");
} else if (bmi > 25 && bmi < 29.9) {
	console.log("You're overweigt!");
} else if (bmi > 30 && bmi < 34.9) {
	console.log("You're Obesity Class 1!");
} else if (bmi > 18.5 && bmi < 39.9) {
	console.log("You're Obesity Class 1!");
} else if (bmi > 40 ) {
	console.log("You're Extreme Obesity Class 3!");
} else {
  console.log("Type Error!")
}

/* 
Underweight	<18.5
Normal weight	18.5-24.9
Overweight	25-29.9
Obesity Class 1	30-34.9
Obesity Class 2	35-39.9
Extreme Obesity Class 3	>40
*/
