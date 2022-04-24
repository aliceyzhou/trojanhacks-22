//Problem 2:
//Slice the following and make sense of the sentence
//Hackingisawesome
//Hint: there are 3 unique words in this sentence.
//try and store each unique sentence in a variable.
//Ans: Hacking is awesome

const que_String = "Hackingisawesome!";


// index 0 -> 7
x = que_String.slice(0, 7) + " " + que_String.slice(7,9) + " " + que_String.slice(-8);
//console.log(x); check out output to see if it's what we want


function Compare(answer){
    host = x;
    
    //Lets creata a timestamp to show how long it took the user
    //to win
    if(host === player1) {
        //print out you won!
        console.log("You have won!\n");
        console.log("It took <insert time> to finish!");
    }
    else{
        //print try again
        console.log("Incorrect! :( Try again")
    }

}
