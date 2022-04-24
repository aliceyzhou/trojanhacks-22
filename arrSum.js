//Problem 1:
//Write code that finds the sum of the following:
//[4,6,10,12] Ans: 32


const sum = [10,6,4,12].reduce((partialSum, a) => partialSum + a, 0);
//console.log(sum); //32

//This is temporary for testing purposes
Compare(32);


//we still need to figure out how to get the output from
//player 1 and player 2 and compare with our HOST to
//check if answer is correct

function Compare(answer){
    host = sum;
    //Lets creata a timestamp to show how long it took the user
    //to win
    if((host === answer))
    {
        //print out you won!
        console.log("You have won!\n");
        console.log("It took <insert time> to finish!");
    }

    else
    {
        //print try again
        console.log("Incorrect! :( Try again")
    }
}




