var pokNameSearch, pokNumSearch, ul, p;
var outputResult = "";

//We now need the strings of all the pokemon in the pokedex
ul = document.getElementsByTagName("h2");//Gets all of the elements with the pokemon's names, stores in an array
p = document.getElementsByTagName("p");//Gets all of the pokemon's descriptions

document.getElementById("pokName")
    .addEventListener("keydown", function (event) {
        if (event.code === "Enter") {
            event.preventDefault();
        }
    });

document.getElementById("pokName")
    .addEventListener("keyup", function (event) {
        //Stops a form from being submitted when enter is pressed   
        if (event.code === "Enter") {

            document.getElementById("pokNameBtn").click()
        }
    });

document.getElementById("pokNum")
    .addEventListener("keydown", function (event) {
        if (event.code === "Enter") {
            event.preventDefault();
        }
    });

document.getElementById("pokNum")
    .addEventListener("keyup", function (event) {
        //Stops a form from being submitted when enter is pressed   
        if (event.code === "Enter") {

            document.getElementById("pokNumBtn").click()
        }
    });

function numSearch() {

    pokNumSearch = document.getElementById("pokNum").value;

    if(pokNumSearch <= 20)
    {
        outputResult = ul[pokNumSearch-1].innerText + ": " + p[pokNumSearch-1].innerText + "\n";

        alert(outputResult);
    }

    else
    {
        alert("Sorry, but please enter a value from 1-20.");
    }

}

function nameSearch() {
    //First we want to get the value from the textField that we are going to do our search
    pokNameSearch = document.getElementById("pokName").value;//Gets the value from search box then converts it into the string value we need

    let isOnlyLetters = onlyLetters(pokNameSearch);
    let numAdded = 0;

    if (isOnlyLetters  && (pokNameSearch.length <= 20)) 
    {
        pokNameSearch = pokNameSearch.toUpperCase();

        

        //Compares each element to see if it matches the search input
        for (i = 0; i < ul.length; i++) {
            
            if (ul[i].innerText.toUpperCase().includes(pokNameSearch) && numAdded < 5)//Takes HTML object and takes out the text and compares it to the search to see if there are ay matches
            {
                outputResult = outputResult + ul[i].innerText + ": " + p[i].innerText + "\n";//Any matches get added to the final output result

                numAdded += 1;
            }

        }

        console.log(outputResult);

        alert(outputResult);
    }

    else if (pokNameSearch.length > 20)
    {
        alert("Sorry, but your search needs to be 20 letters or less.")
    }

    else
    {
        alert("Sorry, but we need only valid letters. A-Z or a-z.");
    }



}

function onlyLetters(enteredText) {
    
    if (/^[a-zA-Z]+$/.test(enteredText)) { return true; }

    else { return false; }
}