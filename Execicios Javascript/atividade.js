// Cria um array com 10 elementos
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Usando a estrutura de repetição while
let i = 0;
while (i < array.length) {
  console.log(array[i]);
  i++;
}

// Usando a estrutura de repetição do-while
let j = 0;
do {
  console.log(array[j]);
  j++;
} while (j < array.length);

// Usando a estrutura de repetição for
for (let k = 0; k < array.length; k++) {
  console.log(array[k]);
}

// Usando a estrutura de repetição foreach
array.forEach((element) => {
  console.log(element);
});
