var maior = "";
var menor = "";
var a = [5, 37, 18, 58, 12, -5];
for (var i = 0; i <=0 ; i++)
console.log ("Numero crescente é:" + )

//ordenar numeros

let array = [5,37,18,59,12,-5]

for (let i=0;i<array.length;i++){
  console.log('indice atual:',i, 'Elemento:',array[i])
  for (let j=0;j<array.length;j++){
   console.log('    indice:',j, 'Elemento:',array[j])
  console.log(`O elemento${array[j]} < ${array[i]}`)
  if (array[j]<array[i]){
    console.log('yes')
  }
  }
}

//ordenar numeros

let array = [5,37,18,59,12,-5]

for (let i=0;i<array.length;i++){
  console.log('indice atual:',i, 'Elemento:',array[i])
  for (let j=0;j<array.length;j++){
  console.log(`O elemento ${array[j]} < ${array[i]}`)
  if (array[j]<array[i]){
    let aux = array[i];
    array[i] = array[j]
    array[j] = aux;
  }
  console.log(array)
  }
}

//correção de ordenação

let array = [5,37,18,59,12,-5]

for (let i=0;i<array.length;i++){
  console.log('indice atual:',i, 'Elemento:',array[i])
  //correção na linha abaixo
  for (let j=i+1;j<array.length;j++){
  console.log(`      O elemento ${array[j]} < ${array[i]}`)
  if (array[j]<array[i]){
    let aux = array[i];
    array[i] = array[j]
    array[j] = aux;
  }
  console.log('     ',array)
  }
}


// resultado final

let array = [5,37,18,59,12,-5]

for (let i=0;i<array.length;i++){
  console.log('indice atual:',i, 'Elemento:',array[i])
  for (let j=i+1;j<array.length;j++){
  console.log(`      O elemento ${array[j]} < ${array[i]}`)
  if (array[j]<array[i]){
    let aux = array[i];
    array[i] = array[j]
    array[j] = aux;
  }
   }
}
console.log(array)

//ordenação sem metodo