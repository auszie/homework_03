/*
* Excercise 1
*
*/



/*
* Then write a function that changes the text and the color inside the div
*
*/



function changeColor(){
    //Write a condition determine what color it should be changed to
    if(document.getElementById("color-name").innerHTML === "#F08080"){
        //change the background color using JS
        document.getElementById("color-block").style.backgroundColor = "#2c9b9b"
        //Change the text of the color using the span id color-name
        document.getElementById("color-name").innerHTML = "#2c9b9b";

        console.log("clicked");
        
    }
    else{
        //change the background color using JS

        //Change the text of the color using the span id color-name
        document.getElementById("color-name").innerHTML = "#F08080";
        document.getElementById("color-block").style.backgroundColor = "#F08080"

    }
}


/*
* For excercise 2, you need to write an event handler for the button id "convertbtn"
* on mouse click. For best practice use addEventListener.
*
*/


/*
* Then write a function that calculates Fahrenheit to Celsius and display it on the webpage
*
*/

function convertTemp(){
    //Calculate the temperature here
    myF = document.getElementById("f-input").value;
    console.log(myF);

    let myC = (myF-32)*(5/9);
    console.log(myC);

    //Send the calculated temperature to HTML
    document.getElementById("c-output").innerHTML = myC;
}


