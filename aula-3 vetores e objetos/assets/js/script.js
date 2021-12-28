// o que são vetores  ou arrays

//como declarar um array
/*let array = ['script',1, true];
console.log(array);*/

//pode guarda  varios tipos de dados
let array = ['string',1,true, ['array1'],['array2'],['array3'],['array4']];
/*console.log(array[3]);*/

/* //forEach itera um array
array.forEach(function(item, indice){console.log(item, indice)})*/

/*//push add um item no final do array
array.push([])
console.log(array);*/

/*//pop remove item no final do array
array.pop()
console.log(array);*/

/*//shift remove item no inicio do array
array.shift()
console,console.log(array);*/

/*//unshift add um item no começo
array.unshift('novo item no inicio');
console.log(array);*/

/*//indexof retorna o indice de um valor
console.log(array.indexOf(true));*/

/*//splice remove ou substitui um item pelo indice
array.splice(0,3);
console.log(array);*/

/*//slice retorna uma parte de um array existente
let novoArray = array.slice(0, 3);
console.log(novoArray);*/

//objetos 

let objeto = { string:'string', number: 1, Boolean: true,  array:['array'], objetoInterno: { objetoInterno: 'objeto interno'} };

/*//como acessar as propriedades do objetos
//usando "."
console.log(objeto.objetoInterno);*/

/*// manipulando objeto,desestruturando objeto
var string = objeto.string;
console.log(string);

var arrayInterno = objeto.array;
console.log(arrayInterno);*/

/*// desestruturando usando chaves
var{string, Boolean, objetoInterno} = objeto;
console.log(string, Boolean,objetoInterno);*/

