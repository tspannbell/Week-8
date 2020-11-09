const tomHeight = 9
const tomMass = 8
const jerryHeight = 10
const jerryMass = 45
let bmiTom = tomMass / tomHeight ** 2
let bmiJerry = jerryMass / jerryHeight ** 2
if (bmiTom > bmiJerry) {
    console.log('Tom has a higher BMI than Jerry, his BMI is' + " " + bmiTom);
} else {
    console.log('Jerry has a higher BMI than Tom, his BMI is' + " " + bmiJerry);
}