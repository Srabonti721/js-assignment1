function calculateFinalScore(obj) {
        if (typeof obj !== "object") {
                return "Invalid input"
        }
        else {
                if (obj.isFFamily === true) {
                        const familyPoint = 20;
                        if (obj.testScore <= 50 && obj.schoolGrade <= 30) {
                                const test = obj.testScore;
                                const school = obj.schoolGrade;
                                const sum = test + school;
                                const finalScore = sum + familyPoint;
                                if (finalScore >= 80) {
                                        return true;
                                }
                                else {
                                        return false;
                                }
                        }
                }
                else {
                        return false;
                }
        }
}
const studentDetails = "hello";
const score = calculateFinalScore(studentDetails);
console.log(score);

