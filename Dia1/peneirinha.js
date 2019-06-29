// Faça um algoritmo que recebe inúmeros parâmentros, sendo que o primeiro necessariamente deve ser um array

// function destroyer(array) {
//     var args = Array.from(arguments);
//     if(args.length > 1) {
//       var filteredArray = [];
//       for(var i = 0; i < array.length; i++) {
//         var value = array[i];
//         if(args.indexOf(value) === -1) {
//           filteredArray.push(value);
//         }
//       }
  
//       return filteredArray;  
//     }
  
//     return array;
//   }
  
//   console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3)); // [1, 1].
//   console.log(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3)) // deve retornar [1, 5, 1].
//   console.log(destroyer([3, 5, 1, 2, 2], 2, 3, 5)) // deve retornar [1].
//   console.log(destroyer([2, 3, 2, 3], 2, 3)) // deve retornar [].
//   console.log(destroyer(["tree", "hamburger", 53], "tree", 53)) // deve retornar ["hamburger"].

