/*
 * Created by sanjeev on 26/03/2014.
 */

function multiply(){
    a = Number(document.calculator.number1.value);
    b = Number(document.calculator.number2.value);
    c = a * b;
    document.calculator.total.value=c;
}

function addition(){
    a=Number(document.calculator.number1.value);
    b=Number(document.calculator.number2.value);
    c=a+b;
    document.calculator.total.value=c;
}

function subtraction(){
    a=Number(document.calculator.number1.value);
    b=Number(document.calculator.number2.value);
    c=a-b;
    document.calculator.total.value=c;
}

function division(){
    a=Number(document.calculator.number1.value);
    b=Number(document.calculator.number2.value);
    c=a/b;
    document.calculator.total.value=c;
}

function modulus(){
    a=Number(document.calculator.number1.value);
    b=Number(document.calculator.number2.value);
    c=a%b;
    document.calculator.total.value=c;
}

