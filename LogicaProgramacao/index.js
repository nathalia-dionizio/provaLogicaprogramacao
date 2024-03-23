/* PARTE 1: ESTRUTURA SEQUENCIAL
Exercício 1.1:
Fazer um programa para ler o código de uma peça 1, o número de peças 1, o valor unitário de cada peça 1, o
código de uma peça 2, o número de peças 2 e o valor unitário de cada peça 2. Calcule e mostre o valor a ser pago.

Exemplos:

Entrada:             Saída:
12 1 5.30            VALOR A PAGAR: R$ 15.50
16 2 5.10 

Entrada:             Saída:
13 2 15.30           VALOR A PAGAR: R$ 51.40
161 4 5.20

Entrada:             Saída:
1 1 15.10            VALOR A PAGAR: R$ 30.20
2 1 15.10

*/

const readlineSync = require('readline-sync');

const peca_1 = 15.10
const peca_2 = 15.10
const peca_12 = 5.30
const peca_16 = 5.10
const peca_13 = 15.30
const peca_161 = 5.20


const peca_desejada1 = parseInt(readlineSync.question("Digite primeira peça desejada:  "));
const qtd_peca1 = parseInt(readlineSync.question("Digite a quantidade de peças desejada:  "));
const peca_desejada2 = parseInt(readlineSync.question("Digite segunda peça desejada:  "));
const qtd_peca2 = parseInt(readlineSync.question("Digite a quantidade de peças desejada:  "));

let valor1, valor2;

if (peca_desejada1 === 1) {
    valor1 = peca_1 * qtd_peca1
} else if (peca_desejada1 === 2) {
    valor1 = peca_2 * qtd_peca1
} else if (peca_desejada1 === 12) {
    valor1 = peca_12 * qtd_peca1
} else if (peca_desejada1 === 16) {
    valor1 = peca_16 * qtd_peca1
} else if (peca_desejada1 === 13) {
    valor1 = peca_13 * qtd_peca1
} else { 
    valor1 = peca_161 * qtd_peca1
}


if (peca_desejada2 === 1) {
    valor2 = peca_1 * qtd_peca2
} else if (peca_desejada2 === 2) {
    valor2 = peca_2 * qtd_peca2
} else if (peca_desejada2 === 12) {
    valor2 = peca_12 * qtd_peca2
} else if (peca_desejada2 === 16) {
    valor2 = peca_16 * qtd_peca2
} else if (peca_desejada2 === 13) {
    valor2 = peca_13 * qtd_peca2
} else { 
    valor2 = peca_161 * qtd_peca2
}

const valor_total_a_pagar = valor1 + valor2;
console.log("Valor total a pagar: R$" + valor_total_a_pagar.toFixed(2));

/* Exercício 1.2:
Faça um programa para ler o valor do raio de um círculo, e depois mostrar o valor da área deste círculo com quatro
casas decimais conforme exemplos.
Fórmula: area = π . raio2
Considere o valor de π = 3.14159

Entrada:         Saída:
2.00             A=12.5664
*/

const readlineSync = require('readline-sync');
const raio = parseFloat(readlineSync.question("Digite o valor do raio:  "));
const area = Math.PI * Math.pow(raio, 2);
const areaFormatada = area.toFixed(4);
console.log(`A área do círculo é: ${areaFormatada}`);



/* PARTE 2: ESTRUTURA CONDICIONAL 

Exercício 2.1:
Com base na tabela de preços ao lado, faça
um programa que leia o código de um item e a
quantidade deste item. A seguir, calcule e
mostre o valor da conta a pagar.

cod      Especificação      Preço
1       cachorro quente     4
2       x-salada            4.50
3       x-bancon            5
4       Torrada simples     2
5       refrigerante        1.50

Exemplos:
Entrada: Saída:
3 2 Total: R$ 10.00

*/

const readlineSync = require('readline-sync');

const cod1 = 4.00
const cod2 = 4.50
const cod3 = 5.00
const cod4 = 2.00
const cod5 = 1.50

console.log("codigo 1 cachorro quente 4.00 / codigo 2  x-salada  4.50 / codigo 3  x-bancon  5.00 / codigo 4  Torrada simples 2.00 /codigo 5  refrigerante 1.50")
const pedido = parseInt(readlineSync.question("Digite o código do pedido desejado:   "));
const qtd_pedido = parseInt(readlineSync.question("Digite a quantidade desejada:  "));

let valor_pedido;

if (pedido === 1) {
    valor_pedido = qtd_pedido * cod1
} else if (pedido === 2){
    valor_pedido = qtd_pedido * cod2
} else if (pedido === 3){
    valor_pedido = qtd_pedido * cod3
} else if (pedido === 4){
    valor_pedido = qtd_pedido * cod4
} else {
    valor_pedido = qtd_pedido * cod5
}

console.log(`O valor a pagar é: ${valor_pedido}`);


/*
PARTE 3: ESTRUTURAS REPETITIVAS
Exercício 3:
Escreva um programa que repita a leitura de uma senha até que ela seja válida. Para cada leitura de senha
incorreta informada, escrever a mensagem "Senha Invalida". Quando a senha for informada corretamente deve ser
impressa a mensagem "Acesso Permitido" e o algoritmo encerrado. Considere que a senha correta é o valor 2002.

Exemplos:
Entrada:         Saída:
2200             Senha Invalida
1020             Senha Invalida
2022             Senha Invalida
2002             Acesso Permitido

*/

const senha_valida = 2002

const readlineSync = require('readline-sync');

console.log("Usuário")
const senha = parseInt(readlineSync.question("Digite sua senha:   "));

if (senha === senha_valida) {
    console.log("Acesso Permitido")
} else {
    console.log("Senha Invalida")
}


/*
Exercício 3.2:
Leia um valor inteiro N. Este valor será a quantidade de valores inteiros X que serão lidos em seguida.
Mostre quantos destes valores X estão dentro do intervalo [10,20] e quantos estão fora do intervalo, mostrando
essas informações conforme exemplo (use a palavra "in" para dentro do intervalo, e "out" para fora do intervalo).
*/

const input = require('readline-sync');
const N = parseInt(input.question('Digite um valor inteiro N: '));

let dentroIntervalo = 0;
let foraIntervalo = 0;

for (let i = 0; i < N; i++) {
    const X = parseInt(input.question(`Digite o valor inteiro X #${i + 1}: `));
    if (X >= 10 && X <= 20) {
        dentroIntervalo++;
    } else {
        foraIntervalo++;
    }
}

console.log(`Dentro do intervalo: ${dentroIntervalo} números`);
console.log(`Fora do intervalo: ${foraIntervalo} números`);
