//Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...),
// escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem 
//avisando se o número informado pertence ou não a sequência.


     let numeroExiste = 89;
     let quantidadeDeNumero = 50;
     let t1 = 0;
     let t2 = 1;
     let pt = 0; 

for (let i = 2; i <= quantidadeDeNumero; i++){
    console.log(pt);
    pt = t1+t2;
    t1 = t2;
    t2 = pt;
    if (numeroExiste == pt) {
        console.log("O número está na sequencia de fibonacci."); 
     } 
    
}

