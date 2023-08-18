//média de 3 notas
//Média = (nota 1 + nota 2 + nota 3) / 3;

let nome = "Carlos"
let nota1 = 05
let nota2 = 2
let nota3 = 8

const media = (nota1+nota2+nota3)/3
console.log(`A média de ${nome} é ${media}`)

if (media < 5){ 
    console.log(`${nome} está reprovado`) 
}else if (media <=7){
    console.log(`${nome} está de recuperação`)
} else {
    console.log(`${nome} está de aprovado`)
}

