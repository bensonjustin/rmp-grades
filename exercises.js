//Create a Revealing Module Pattern that will have the following data and methods:

//data
//scores 65, 76, 100, 88, 17, 55

let dataModule = (function (){

let scores = [65, 76, 100, 88, 17, 55];

//methods
// 1. finds the sum of all scores

function sumScore(){
    let sumTotal = 0;
    for (let i=0; i<scores.length; i++){
        sumTotal += scores[i];
    }
    return sumTotal;
}

// 2. finds the avg of all scores

function avgScore(){
    let avgTotal = 0;
    for (let i=0; i<scores.length; i++){
        avgTotal += scores[i];
    }
    return avgTotal/scores.length;
}

// 3. finds the highest score

function highScore(){
    let highTotal = Math.max.apply(Math, scores);
    return highTotal;
}

// 4. finds the lowest score

function lowScore(){
    let lowTotal = Math.min.apply(Math, scores);
    return lowTotal;
}

// 5. generates a random score

function ranScore(){
    let ranTotal = scores[Math.floor(Math.random()*scores.length)];
    return ranTotal
}

// 6. finds the number of passing scores above 70

function passingScores(){
    let passingTotal = [];
    for (let i=0; i<scores.length; i++){
        if (scores[i] > 70){
            passingTotal.push(scores[i]);
        }
    }
    return passingTotal;
}

// 7. finds the first score in the list 

function firstScore(){
    // let firstTotal = scores.shift();
    // return firstTotal;
    return scores[0];
}

// 8. finds the last score in the list 

function lastScore(){
    //return scores[Number(scores.length)];
    let lastTotal = [];
    for (let i=scores.length-1; i<scores.length; i++){
        lastTotal.push(scores[i]);
    }
    return lastTotal;
}

// 9. generates a new score list with a 5% increase for each score 

function newScore(){
    let newTotal = [];
    for (let i=0; i<scores.length; i++){
        newTotal.push(scores[i]*1.05);
    }
    return newTotal;
}

// 10.generates a list of scores that are odd numbered

function oddScore(){
    let oddTotal = [];
    for (let i=0; i<scores.length; i++){
        if (scores[i]%2 !== 0){
            oddTotal.push(scores[i]);
        }
    }
    return oddTotal;
}

return {
    sumScore: sumScore,
    avgScore: avgScore,
    highScore: highScore,
    lowScore: lowScore,
    ranScore: ranScore,
    passingScores: passingScores,
    firstScore: firstScore,
    lastScore: lastScore,
    newScore: newScore,
    oddScore: oddScore
}

})();

console.log("[65, 76, 100, 88, 17, 55]")
console.log("sum " + dataModule.sumScore())
console.log("avg " + dataModule.avgScore())
console.log("high " + dataModule.highScore())
console.log("low " + dataModule.lowScore())
console.log("ran " + dataModule.ranScore())
console.log("passing " + dataModule.passingScores())
console.log("first " + dataModule.firstScore())
console.log("last " + dataModule.lastScore())
console.log("new " + dataModule.newScore())
console.log("odd " + dataModule.oddScore())
