let prevVal = "";
let newVal = "";
let resultVal = "";
let mathOperator = "";
let decimalTracker = false;
let memVal = "";

function numButPress(num){
    if (resultVal){
        newVal = num;
        resultVal = "";
    } else {
        if (num === '.'){
            if (decimalTracker != true){
                newVal += num;
                decimalTracker = true;
            }
        } else {
            newVal += num;
        }
    }
    document.getElementById("entry").value = newVal;
}


function mathButPress(operator){
    if (!resultVal){
        prevVal = newVal;
    } else {
        prevVal = resultVal;
    }
    newVal = "";
    decimalTracker = false;
    mathOperator = operator;
    resultVal = "";
    document.getElementById("entry").value = "";
}


function equalButPress(num){
    decimalTracker = false;
    prevVal = parseFloat(prevVal);
    newVal = parseFloat(newVal);
    switch (mathOperator){
        case "+":
            resultVal = prevVal + newVal;
            break;
        case "-":
            resultVal = prevVal - newVal;
            break;
        case "*":
            resultVal = prevVal * newVal;
            break;
        case "/":
            resultVal = prevVal / newVal;
            break;
        default :
            resultVal = newVal;
    }

    prevVal = resultVal;
    document.getElementById("entry").value = resultVal;
}

function clearButPress(){
    prevVal = "";
    newVal = "";
    resultVal = "";
    mathOperator = "";
    decimalTracker = false;
    document.getElementById("entry").value = "0";
}

function copyButPress(num){
    memVal = document.getElementById("entry").value;
}

function pasterButPress(num){
    if (memVal){
        document.getElementById("entry").value = memVal;
        newVal = memVal;
    }
}
