/*function getHistory(){
    return document.getElementById("secDisplay").innerText;
}
function printHistory(num){
    document.getElementById("secDisplay").innerText=num;
}
function getOutput(){
    return document.getElementById("mainDisplay").innerText;
}
function printOutput(num){
    if (num==""){
        document.getElementById("mainDisplay").innerText=num;
    }
    else {
        document.getElementById("mainDisplay").innerText=getFormattedNumber(num);
    }
    
}
function getFormattedNumber(num){
    var n = Number(num);
    var value = n.toLocaleString("en");
    return value;
}

function reverseNumberFormat(num){
    return Number(num.replace(/,/g,''));
}
var operator = document.getElementsByClassName("operator");
for(var i =0;i<operator.length;i++){
    operator[i].addEventListener('click',function(){
        if(this.id=="C"){
            printHistory("");
            printOutput("");
        }
        else if(this.id=="Del"){
            var
            output=reverseNumberFormat(getOutput()).toString();
            if(output){ //if output has a value
                output= output.substr(0,output.length-1);
                printOutput(output);
            }
        }
        else{
            var output=getOutput();
            var history=getHistory();
            if(output!=""){
                output=reverseNumberFormat(output);
                history=history+output;
                if(this.id=="="){
                    var result=eval(history);
                    printOutput(result);
                    printHistory("");
                }
                else{
                    history=history+this.id;
                    printHistory(history);
                    printOutput("");
                }
            }
        }
    });
}
var number = document.getElementsByClassName("number");
for(var i =0;i<number.length;i++){
    number[i].addEventListener('click',function(){
        var output=reverseNumberFormat(getOutput());
        if(output!=NaN){ //if output is a number
            output=output+this.id;
            printOutput(output);

        }
    });
}
*/ 