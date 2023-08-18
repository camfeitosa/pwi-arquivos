//Calcular IMC
// IMC = peso / (altura * altura)

let nome = "Rafa"
let altura = 1.60
let peso = 1000
let imc = peso/(altura*altura)

console.log(imc)

if (imc < 18.5){
    console.log(`${nome} está abaixo do peso`)
} else if (imc >= 18.5 || imc <= 25){
    console.log(`${nome} está com o peso normal`) 
} else if (imc > 25 || imc <= 30){
    console.log(`${nome} está acima do peso`) 
} else if (imc > 30 || imc <= 40){
    console.log(`${nome} está obeso`) 
} else {
    console.log("Obesidade grave") 
}