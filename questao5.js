//Escreva um programa que inverta os caracteres de um string.

function inverterString(str) {
    let novaString = '';
    for (let i = str.length - 1; i >= 0; i--) {
      novaString += str[i];
    }
    return novaString;
  }

  let palavra = "paralelepipedo";
  let palavraInvertida = inverterString(palavra);
  console.log(palavraInvertida);