// this is lecture activity - Bugs and Errors

myGrades = [100, 100, 90, 73, 78, 94, 86];

myAverage = 0;

for (let i = 0; i < myGrades.length; i++) { // the value for the variable "i" should be 0, if set to 1 it skips the first action.
    // another thing I fixed was the less than equal sign to less than, which fixed the execution

myAverage += myGrades[i];

}

myAverage = myAverage / myGrades.length;

console.log("My grade average is " + myAverage);