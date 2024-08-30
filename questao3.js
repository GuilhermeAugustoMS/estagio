//Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
//• O menor valor de faturamento ocorrido em um dia do mês;
//• O maior valor de faturamento ocorrido em um dia do mês;
//• Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.



export default async function fetchData() {
    const res = await fetch('./dados.json');
    const data = await res.json();
    handleData(data);
  }

  let numeros = data.map((element) => element.valor);
  let maior = Math.max (numeros);
  let numeroMaior = numeros.filter((numeros) => numeros > 0);
  let menor = Math.min (numeros);
  let soma = numeros.reduce((total, numeros) => total + numeros, 0);
  let media = soma/30;


  console.log(maior);
  console.log(menor);
  console.log(media);