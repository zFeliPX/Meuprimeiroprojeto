tipo = prompt("Digite o simbolo da expressao desejada: exemplo + para adicao - par subtracao ")

if (tipo == "+"){
    function somar(a1, b1){
    return console.log("A + B  = " + (a1 + b1))
    }

var a = parseFloat(prompt("Digite um numero "))
var b = parseFloat(prompt("Digite um numero "))

somar(a,b)

}


else if (tipo == "-"){
    function calculo(a1, b1){
    return console.log("A + B  = " + (a1 - b1))
    }

var a = parseFloat(prompt("Digite um numero "))
var b = parseFloat(prompt("Digite um numero "))

calculo(a,b)

}

else if (tipo == "/"){
    function calculo(a1, b1){
    return console.log("A + B  = " + (a1 / b1))
    }

var a = parseFloat(prompt("Digite um numero "))
var b = parseFloat(prompt("Digite um numero "))

calculo(a,b)

}

else if (tipo == "*"){
    function calculo(a1, b1){
    return console.log("A + B  = " + (a1 * b1))
    }

var a = parseFloat(prompt("Digite um numero "))
var b = parseFloat(prompt("Digite um numero "))

calculo(a,b)

}

else console.log("Voce Digitou um simbolo errado! ")

