/* 
    Exercicio 1)
        Write a loop that makes seven calls to console.log to output the following triangle:
        #
        ##
        ###
        ####
        #####
        ######
        #######
*/
{
    let x = "";
    
    for(let i = 0; i < 7; i++){
        x+="#";
        console.log(x);
    }
}

/*
    Exercicio 2)
        Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions.
        For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.
*/
{
    for(let i = 1; i <101;i++){
        console.log(i%5==0?"buzz":i%3==0?"fizz":i);
    }
}

/*
    Exercicio 3)
        Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines.
        At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.
*/
{
    for(let i = 0; i < 8; i++){
        console.log(i%2==0?" # # # #": "# # # # ");
    }
}
