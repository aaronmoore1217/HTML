//method to create list items?
function createSection(element){
    let newLi = document.createElement(element)

    return newLi
}
function createEl(element, text){
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
        let content = document.querySelector("body");
        let Jason = responseObject.content;

        //loop through object to obtain all elements/data to add to the webpage
        for( let i = 0; i < Jason.length; ++i){
            let box = createSection(Jason[i].container)
            box.appendChild(createEl(Jason[i].header.element, Jason[i].header.text))
            box.appendChild(createEl(Jason[i].body.element, Jason[i].body.text))
            content.appendChild(box)
        }
    }
}

xhr.open('GET', 'json.json', true);

xhr.send(null);