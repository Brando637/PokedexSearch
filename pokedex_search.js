var pokNameSearch, pokNumSearch, listName, descript, num, images;
var outputResult = "";

//We now need the strings of all the pokemon in the pokedex
listName = document.getElementsByTagName("h2");//Gets all of the elements with the pokemon's names, stores in an array
descript = document.getElementsByTagName("p");//Gets all of the pokemon's descriptions
num = document.getElementsByTagName("num");//Gets all of the pokemon's numbers. This number is hidden from the viewer
images = document.getElementsByTagName("img");//Get all of the pokemon's images.

document.body.onload = addElement, addListeners;

function addElement(){
    var ulTop = document.getElementById("pokedex");
    var div = document.createElement("div");//Section where output will be listed dynamically
    div.id = "dySearchOut";
    document.body.insertBefore(div, ulTop);
}

function addListeners(){
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

}


function numSearchAlert() {

    pokNumSearch = document.getElementById("pokNum").value;

    let numAdded = 0;

    if(pokNumSearch <= 20)
    {
        for(i = 0;i < num.length;i++)
        {
            if(num[i].innerText.includes(pokNumSearch) && numAdded < 5)
            {
                outputResult = outputResult + (i+1) + ". " + listName[i].innerText + ": " + descript[i].innerText + "\n";
                numAdded += 1;
            }
        }

        alert(outputResult);
    }

    else
    {
        alert("Sorry, but please enter a value from 1-20.");
    }

}

function nameSearchAlert() {
    pokNameSearch = document.getElementById("pokName").value;//Gets the value from search box then converts it into the string value we need

    let isOnlyLetters = onlyLetters(pokNameSearch);//Check to see if the input is only letters
    let numAdded = 0;

    if (isOnlyLetters  && (pokNameSearch.length <= 20)) 
    {
        pokNameSearch = pokNameSearch.toUpperCase();

        //Compares each element to see if it matches the search input
        for (i = 0; i < listName.length; i++) {
            
            if (listName[i].innerText.toUpperCase().includes(pokNameSearch) && numAdded < 5)//Takes HTML object and takes out the text and compares it to the search to see if there are ay matches
            {
                outputResult = outputResult + (i+1) + ". " + listName[i].innerText + ": " + descript[i].innerText + "\n";//Any matches get added to the final output result

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

function nameSearch(){

    //Need to first check if a list has been created before
    //If there is a list, then we need to get rid of it
    if(document.getElementById("dySearchList"))
    {
        removeList();
    }

    //If there isn't a list we will create one and populate it
    var innerList = document.createElement("ul");
    innerList.id = "dySearchList";


    var divList = document.getElementById("dySearchOut");

    pokNameSearch = document.getElementById("pokName").value;//Gets the value from search box then converts it into the string value we need
    pokNameSearch = pokNameSearch.toUpperCase();

    for (i = 0; i < listName.length; i++) {
        let listPoint;
        if (listName[i].innerText.toUpperCase().includes(pokNameSearch)) {
            listPoint = document.createElement("li");
            listPoint.id = i;
            let pokImg = images[i];
            let pName = listName[i];
            let pokDes = descript[i];
            listPoint.appendChild(pokImg.cloneNode(true));
            listPoint.appendChild(pName.cloneNode(true));
            listPoint.appendChild(pokDes.cloneNode(true));
            innerList.appendChild(listPoint);
        }
    }
    divList.appendChild(innerList);

    //If the user removes all characters from the form then we want to remove the search result list
    if(pokNameSearch == "")
    {
        removeList();
    }
}

function numSearch(){

}

//This will destroy the current list that exists
function removeList(){
    var divList = document.getElementById("dySearchOut");
    while(divList.firstChild)
    {
        divList.removeChild(divList.lastChild);
    }

}