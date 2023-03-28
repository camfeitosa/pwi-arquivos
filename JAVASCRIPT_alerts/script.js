/*
Nome tem idade anos, pesa peso kg
tem altura e seu IMC é de imc
Fulano nasceu em anoNascimento
*/

const nome = 'Camila'
const sobrenome = 'Feitosa'
const idade = '17'
const peso = '45'
const altura = '1.60'
let imc; // peso / (altura * altura)
let anoNascimento

imc = peso / (altura * altura)
anoNascimento = 2023 - idade

// template strings `` 
console.log(`${nome} tem ${idade} anos, pesa ${peso} kg`)
console.log(`tem ${altura} de altura e seu IMC é de ${imc}`)
console.log(`${nome} nasceu em ${anoNascimento}`)