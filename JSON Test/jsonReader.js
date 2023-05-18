//method to create list items?
function createSection(element){
    let newLi = document.createElement(element)

    return newLi
}
function createEl(element, text){
    //creates a new li element, adds a text node to it, and returns
    if (element === "img"){
        let newLi = document.createElement(element);
        newLi.src = text;
        return newLi;
    }
    else {
        let newLi = document.createElement("div");
        newLi.className = element;
        let textNode = document.createTextNode(text);
        newLi.appendChild(textNode);
        return newLi;
    }
}



//json parsing
let xhr = new XMLHttpRequest(); 

xhr.onload = function() {

    if(xhr.status === 200){
        let responseObject = JSON.parse(xhr.responseText);
        let content = document.querySelector("body");
        let Jason = responseObject.Restaurants;

        //loop through object to obtain all elements/data to add to the webpage
        for(let i = 0; i < Jason.length; ++i){
            let container = createSection(Jason[i].container);
            let imgBox = createSection(Jason[i].imgContainer);
            let textBox = createSection(Jason[i].textContainer)
            

            for (let b = 0; b < Jason[i].content.length; ++b){
                if (Jason[i].content[b].element === "img"){
                    imgBox.appendChild(createEl(Jason[i].content[b].element, Jason[i].content[b].text))
                }
                else {
                    textBox.appendChild(createEl(Jason[i].content[b].element, Jason[i].content[b].text))
                }
            }
            container.appendChild(imgBox);
            container.appendChild(textBox);
            content.appendChild(container);
        }
    }
}

xhr.open('GET', 'json.json', true);

xhr.send(null);