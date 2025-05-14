
n1 = entrada = 0
n2 = entrada = 0
n3 = entrada = 0


for(numero = 1; numero <= 3; numero ++){
    entrada = parseFloat(prompt("Digite o primeiro "+ numero+ "º número: "));
    if (numero == 1){
        n1 = entrada
    }

    else if (numero == 2){
        n2 = entrada
    }
    else if (numero == 3){
        n3 = entrada
    }
}


if (n1 < n2 && n1 < n3 && n2 < n3){
    console.log(n1, n2, n3)
}

else if (n2 < n1 && n2 < n3 && n1 < n3){
    console.log(n2, n1, n3)
}
else if (n3 < n1 && n3 < n2 && n1 < n2){
    console.log(n3, n1, n2)
}
else if (n1 < n2 && n1 < n3 && n3 < n2){
    console.log(n1, n3, n2)
}
else if (n2 < n1 && n2 < n3 && n3 < n1){
    console.log(n2, n3, n1)
}
else if (n3 < n1 && n3 < n2 && n2 < n1){
    console.log(n3, n2, n1)
}       

else if (n1 == n2 && n1 == n3 && n2 == n3){
    console.log("Os números são iguais: " + n1, n2, n3)
}

else{
    console.log("Ocorreu um erro")
}