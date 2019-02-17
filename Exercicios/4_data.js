
let jornal = require("./JOURNAL");

var journal = [];

function addEntry(events, squirrel) {
  journal.push({events, squirrel});
}

function phi(table) {
  return (table[3] * table[0] - table[2] * table[1]) /
    Math.sqrt((table[2] + table[3]) *
              (table[0] + table[1]) *
              (table[1] + table[3]) *
              (table[0] + table[2]));
}

function tableFor(event, journal) {
  let table = [0, 0, 0, 0];
  for (let i = 0; i < journal.length; i++) {
    let entry = journal[i], index = 0;
    if (entry.events.includes(event)) index += 1;
    if (entry.squirrel) index += 2;
    table[index] += 1;
  }
  return table;
}

function journalEvents(journal) {
  let events = [];
  for (let entry of journal) {
    for (let event of entry.events) {
      if (!events.includes(event)) {
        events.push(event);
      }
    }
  }
  return events;
}

function max(...numbers) {
  let result = -Infinity;
  for (let number of numbers) {
    if (number > result) result = number;
  }
  return result;
}

var list = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null
    }
  }
};

function remove(array, index) {
    return array.slice(0, index).concat(array.slice(index + 1));
}

/*
    Exercicio 1)
        Write a range function that takes two arguments, start and end
        returns an array containing all the numbers from start up to (and including) end.

        Write a sum function that takes an array of numbers and returns the sum of these numbers.
*/
function range(start, end){
    let array = [];
    if(start<end){
        for(start;start<=end; start++){
            array.push(start);
        }
        return array;
    }
    for(end; end<=start; end++){
        array.push(end);
    }
    return array;
}
console.log("range ------");
console.log("range(1,10): ", range(1,10));

function sum(numbers){
    let total = 0;
    for(let number of numbers){
        total += number;
    }
    return total;
}
console.log("\n\nSum ------");
console.log("sum(range(1,10)): ", sum(range(1,10)));

/*
    Exercicio 2)
        Write a reverseArray function that return the array by inverting the order of the elements.

        Write a reverseArrayAtPlace that takes a array as parameter and return the same array in the inverted order. 
*/
function reverseArray(array){
    if(array.length <= 1)
        return array;
    let res = [];
    for(let i = array.length-1; i >= 0;res.push(array[i]), i--);
    return res;
}
console.log("\n\nreverseArray ------");
console.log("reverseArray([1,2,5,7]): ", reverseArray([1,2,5,7]));

function reverseArrayAtPlace(array){
    for(let i = 0; i<array.length; i++){
        array.splice(i,0,array.pop());
    }
}
console.log("\n\nreverseArrayAtPlace ------");
let a = [1,4,5,7];
reverseArrayAtPlace(a);

console.log("reverseArrayAtPlace(a = [1,4,5,7]): ", a);

/*
    Exercicio 3)
        Write a function arrayToList that builds up a list structure like the one shown when given [1, 2, 3] as argument.
        
        Also write a listToArray function that produces an array from a list. 
*/
function arrayToList(array){
    if(array.length == 0){
        return null;
    }
    return {
        value: array[0],
        rest: arrayToList(array.slice(1))
    }
}
console.log("\n\narrayToList ------");
console.log("arrayToList([1,2,3]): ", arrayToList([1,2,3]));

function listToArray(lista){
    array = [];
    while(lista != undefined){
        array.push(lista.value);
        lista = lista.rest;
    }
    return array;
}
console.log("\n\nlistToArray ------");
let listinha = {
    value: 5,
    rest: {
        value: 0,
        rest: {
            value: 50,
            rest: null
        }
    }
}
console.log("listinha = { value: 5, rest: { value: 0, rest: { value: 50, rest: null } } }");
console.log("listToArray(listinha): ", listToArray(listinha));