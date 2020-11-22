//1) Inserisci un numero e verifichi se è un numero primo o no
//2) Inserisci un numero massimo e
// il programma stampa a schermo tutti i numeri primi fino a quello

var primi =numFornito => {

  var areNumPrimi = [];
  for(var numero = 2; numero <= numFornito; numero++)
  if(seiPrimo(numero)) areNumPrimi.push(numero);

  return areNumPrimi;
}

function seiPrimo (numero) {
  for (var divisore = 2; divisore <numero; divisore++)
  if (numero % divisore == 0) return false;

  return true;
}

console.log(primi(100));
