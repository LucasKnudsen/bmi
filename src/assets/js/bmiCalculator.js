const calculateMetricBMI = (weight, height) => {
    let result
    result = (weight / ((height / 100) * (height / 100))).toFixed(2);
    return result;
}

/* 
Underweight	<18.5
Normal weight	18.5-24.9
Overweight	25-29.9
Obesity Class 1	30-34.9
Obesity Class 2	35-39.9
Extreme Obesity Class 3	>40
*/

const getBMIClassification = (bmi) => {
    if (bmi < 18.5) {
        return "Underweight";
    } else if (bmi > 18.5 && bmi < 24.9) {
        return "Normal weight";
    } else if (bmi > 25 && bmi < 29.9) {
        return "Overweight";
    } else if (bmi > 30 && bmi < 34.9) {
        return "Obesity Class 1";
    } else if (bmi > 18.5 && bmi < 39.9) {
        return "Obesity Class 2";
    } else if (bmi > 40 ) {
        return "Extreme Obesity Class 3";
    }
}