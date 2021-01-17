// Your code here
function saturdayFun(a = "roller-skate") {
    return `This Saturday, I want to ${a}!`;
}

function mondayWork(a = "go to the office") {
    return `This Monday, I will ${a}.`;
}

function wrapAdjective (str = "*") {
    return function(statemnt = "special") {
        return `You are ${str}${statemnt}${str}!`;
};
}

let Calculator = {
    num1 : 1, 
    num2 : 3,
    num3 : 10, 
    num4 : 5,
    add : function() {
        return this["num1"] + this["num2"];
    },
    subtract : function() {
        return this["num1"] - this["num2"];
    },
    multiply : function() {
        return this["num1"] * this["num2"];
    },
    divide : function() {
        return this["num3"] / this["num4"];
    },
} 

function actionApplyer (starter, funarray) {
    let j = starter;
    for (const i of funarray) {
        j = i(j);
    }
    return j;
}