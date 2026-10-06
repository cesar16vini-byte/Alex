//questão 1:
/*
const nome = prompt("Digite seu nome:");
let nota1 = parseFloat(prompt("Digite a primeira nota:"));
let nota2 = parseFloat(prompt("Digite a segunda nota:"));

let media = (nota1 + nota2) / 2;

if (media >= 6){
    console.log(`Parabéns, ${nome}! Você foi aprovado com média ${media.toFixed(2)}.`);
} else {
    console.log(`Infelizmente, ${nome}! Você foi reprovado com média ${media.toFixed(2)}.`);
}
*/

//questão 2:
/*  
function calcularDesconto(valorCompra) {
    if (valorCompra >= 200){
        return valorCompra * 0.90; // 10% de desconto
    }
    else{
        return valorCompra; // Sem desconto
    }
    
}

const produto = prompt("Digite o nome do produto:");
let preco = parseFloat(prompt("Digite o preço do produto:"));
let quanti_produto = parseInt(prompt("Digite a quantidade que foi comprada:"));
let total = preco * quanti_produto;

let valorFinal = calcularDesconto(total);

console.log(`Produto: ${produto}`);
console.log(`Total: R$ ${valorFinal.toFixed(2)}`);
*/

//questão 3:
/*
function verificarmatricula(matricula){
    return matricula === 'ativa' || matricula === 'Sim' || matricula === 'SIM';
}

let matricula = prompt("Você já possui matrícula? (sim/não)");
let idade = parseInt(prompt("Digite sua idade:"));
if (!(idade >= 16 && verificarmatricula(matricula))) {
    console.log(`voce tem ${idade} anos e sua matricula está ${matricula}, você não pode acessar o sistema.`);
} else {
    console.log(`voce tem ${idade} anos e sua matricula está ${matricula}, você pode acessar o sistema.`);
}*/

//questão 4:
/*
function calcularPreco_Final(preco, desconto){
    return preco - (preco * (desconto / 100));   
}
function verificarDesconto(preco){

    if (preco >=200){
        return true;
    }
    else{
        return false;
    }
}

let produto = prompt("Digite o nome do produto:");
let preco = parseFloat(prompt("Digite o preço do produto:"));
let desconto = parseFloat(prompt("Digite o desconto em porcentagem:"));
let preco_Final = calcularPreco_Final(preco, desconto);
console.log(`O seu ${produto} com desconto de ${desconto}% ficou no valor de R$ ${preco_Final.toFixed(2)}`);
*/

//questão 5:
let aluno = prompt("Digite o nome do aluno:");
let n1 = parseFloat(prompt("Digite a primeira nota:"));
let n2 = parseFloat(prompt("Digite a segunda nota:"));
let n3 = parseFloat(prompt("Digite a terceira nota:"));
let n4 = parseFloat(prompt("Digite a quarta nota:"));

let freq = parseFloat(prompt("Digite a frequência do aluno (em %):"));

function calcularMedia(n1, n2, n3, n4) {
    return (n1 + n2 + n3 + n4) / 4;
}

function verificarAprovacao(media, freq) {
    if (media >= 7 && freq >= 75) {
        return "aprovado";
    } else if (media >= 7 && media < 7 && freq >= 75) {
        return "recuperação";
    } else {
        return "reprovado";
    }
}

let media = calcularMedia(n1, n2, n3, n4);
let situacao = verificarAprovacao(media, freq);

console.log(`Aluno ${aluno}: ${situacao} (média ${media.toFixed(2)}, frequência ${freq}%)`);