/*
    Exercicio 1)
        Write a function min that takes two arguments and returns their minimum.
*/
const min = (n1, n2) => {
    return n1<n2?n1:n2;
}
console.log("função min ------");

console.log("0, 10: " + min(0, 10));
console.log("0, -10: " + min(0, -10));

/*
    Exercicio 2)
        Write a function isEven that take a number and return true if it's even and false if it's odd.
*/
const isEven = (n) => {
    if(n<0){
        return false;
    }
    return n%2==0?true:false;
}

console.log("função isEven ------");

console.log("50: " + isEven(50));
console.log("75: " + isEven(75));
console.log("-1: " + isEven(-1));
console.log("-2: " + isEven(-2));

/*
    Exercicio 3)
        Write a function countBs that takes a string as its only argument and returns a number that indicates
        how many uppercase “B” characters there are in the string.
        
        Write a function called countChar that behaves like countBs, except it takes a second argument that indicates the character that is to be counted 
*/
function countBs(string){
    let count = 0;
    for(let i = 0; i < string.length; i++){
        if(string[i] == "B"){
            count++;
        }
    }
    return count;
}

function countChar(string, char){
    let count = 0;
    for(let i = 0; i < string.length; i++){
        if(string[i] == char[0]){
            count++;
        }
    }
    return count;
}

console.log("Função CountBs ------");
console.log("BBC: " + countBs("BBC"));
console.log("Função countChar ------");
console.log("kakkerlak, k: " + countChar("kakkerlak", "k"));
