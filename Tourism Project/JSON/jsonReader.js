//method to create list items?
function createSection(element) {
    let newLi = document.createElement("div");
    newLi.className = element;
    return newLi;
}
function createEl(element, text) {
    //creates a new li element, adds a text node to it, and returns
    if (element === "img") {
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
function createButton(element, text, link) {
    let anchor = document.createElement("a");
    anchor.href = link;
    
    let newLi = document.createElement("button");
    newLi.className = element;
    let textNode = document.createTextNode(text);
    newLi.appendChild(textNode);
    
    anchor.appendChild(newLi);

    return anchor;
}



//json parsing
let xhr = new XMLHttpRequest();

xhr.onload = function () {
    if (xhr.status === 200) {
        let responseObject = JSON.parse(xhr.responseText);
        let Jason = responseObject.Restaurants;
        let cardContainer = createSection(Jason[0].cardContainer);
        content.appendChild(cardContainer);
        //loop through object to obtain all elements/data to add to the webpage
        for (let i = 0; i < Jason.length; ++i) {
            let imgBox = createSection(Jason[i].imgContainer);
            let textBox = createSection(Jason[i].textContainer);
            let container = createSection(Jason[i].container);
            let buttonBox = createSection("cardButton")
            for (let b = 0; b < Jason[i].content.length; ++b) {
                if (Jason[i].content[b].element === "img") {
                    imgBox.appendChild(createEl(Jason[i].content[b].element, Jason[i].content[b].text))
                }
                else if (Jason[i].content[b].element === "button") {
                    buttonBox.appendChild(createButton(Jason[i].content[b].element, Jason[i].content[b].text, Jason[i].content[b].link))
                }
                else {
                    textBox.appendChild(createEl(Jason[i].content[b].element, Jason[i].content[b].text))
                }

            }

            container.appendChild(imgBox);
            container.appendChild(textBox);
            container.appendChild(buttonBox);
            cardContainer.appendChild(this);
        }
    }
}

xhr.open('GET', 'json.json', true);

xhr.send(null);