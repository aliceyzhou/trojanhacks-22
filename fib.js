//Problem 3:
//Find the 12th value of the Fibonacci Sequence of numbers
//F_22 = ?  Ans: 17711

// program to display fibSeq sequence using recursion
function fibSeq(num) {
    if(num < 2) {
        return num;
    }
    else {
        return fibSeq(num-1) + fibSeq(num - 2);
    }
}

// take nth term input from the user and evaluate 
const N = prompt('Enter the number N to evaluate: ');

if(N <=0) {
    console.log('Enter a positive integer.');
}
else {
    //console.log(fibSeq(N));  //shows answer
    evalNum = fibSeq(N);
}

//Function to compare the answer from the user to the host
function Compare(player1, player2, host){
    host = evalNum;
    
    //Lets creata a timestamp to show how long it took the user
    //to win
    if((host === player1)){
        //print out you won!
        console.log("You have won!\n");
        console.log("It took <insert time> to finish!");
    }
    else{
        //print try again
        console.log("Incorrect! :( Try again")
    }

    if((host === player2)){
        //print out you won!
        console.log("You have won!\n");
        console.log("It took: <insert time> to finish!");
    }
    else{
        //print try again
        console.log("Incorrect! :( Try again")
    }

}