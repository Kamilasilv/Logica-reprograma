// 8 - Crie um algoritmo que receba três notas de um aluno, calcule sua média e mostre as seguintes mensagens de acordo com cada situação:
   // - Se a media for igual ou maior que 7 - Aprovado
    //- Se a media for maior e igual a cinco e menor que 7 - Recuperação
    //- Se a media for menor que 5 - Reprovado


let av1 = 5
let av2 = 5
let av3 = 6
let média = av1 + av2 + av3 / 3
console.log(média)

if (média >= 7){
console.log(' Aprovado')
} else if (média >= 5  && média < 7 ){
    console.log(' Recuperação')
} else if (média > 5){
    console.log('Reprovado')
}



