//method to create list items?
function createLi(element, text){
    //creates a new li element, adds a text node to it, and returns
    let newLi = document.createElement(element);
    let textNode = document.createTextNode(text);
    newLi.appendChild(textNode);

    return newLi;
}


//json parsing
let xhr = new XMLHttpRequest(); 

xhr.onload = function() {

    if(xhr.status === 200){
        let responseObject = JSON.parse(xhr.responseText);
        let content = document.getElementById("content");

        //loop through object to obtain all elements/data to add to the webpage
        for( let i = 0; i < responseObject.stuff.length; ++i){
            content.append(createLi(responseObject.stuff[i].element, responseObject.stuff[i].text));
        }
    }
}

xhr.open('GET', 'json.json', true);

xhr.send(null);