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

let startItem = document.getElementById('two');
let prevItem = startItem.previousElementSibling;
let nextItem = startItem.nextElementSibling;

prevItem.className = 'complete';
nextItem.className = 'cool';