// let element = document.querySelector('li.hot');
// element.className = 'cool';

// let els = document.querySelectorAll('li.hot')
// els[1].className = 'cool';

// let els = document.querySelectorAll('li.hot');
// if(els.length > 0){
//     for(let i = 0; i<els.length; ++i){
//         els[i].className = 'cool';
//     }
// }

// let startItem = document.getElementsByTagName('ul')[0];
// let firstItem = startItem.firstElementChild;
// let lastItem = startItem.lastElementChild;

// firstItem.className = 'complete';
// lastItem.className = 'cool';

// let firstItem = document.getElementById('one');
// let TextContent = firstItem.textContent;
// let InnerText = firstItem.innerText;

// let msg = '<p>textContent: ' + TextContent + '</p>';
// msg += '<p> innerText: ' + InnerText + '</p>';

// let el = document.getElementById('scriptResults');
// el.innerHTML = msg;

// // firstItem.textContent = 'Sourdough Bread';
// firstItem.innerHTML = '<a href=\"http://example.org\">' + firstItem.textContent + '</a>';

// let newEl = document.createElement('li');
// let newText = document.createTextNode('https');

// //first, attach the text node to the elements
// newEl.appendChild(newText);
// //find/decide where to put the new element
// let position = document.getElementsByTagName('ul')[0];
// position.appendChild(newEl);

// let remEl = document.getElementsByTagName('li')[3];

// //to remove, first get parent node
// let parentEl = remEl.parentNode;
// //then remove
// parentEl.removeChild(remEl);

let firstItem = document.getElementById('one');

if (firstItem.hasAttribute('class')){
    // let attr = firstItem.getAttribute('class');
    firstItem.className = 'complete';
    
}
let fourthItem = document.getElementsByTagName('li')[3];
fourthItem.setAttribute('class', 'cool');

let el = document.getElementById('scriptResults');
el.innerHTML = '<p>The first item has a class name: ' + attr + '</p>'