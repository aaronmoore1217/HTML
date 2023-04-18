//create an array of color values
// let colors = ['white', 'black', 'custom'];

// look for id #colors, change text in box accordingly
// const el = document.getElementById('colors');
// el.textContent = colors[2];

//create three string variables - Howdy + name + check your order
let greeting = "Howdy ";
let your_name = "Mr Roeth";
let msg = ", please check your order";
let welcome = greeting + your_name + msg;

//update the welcome
const el2 = document.getElementById('greeting');
el2.textContent = welcome; //el2.textContent = greeting + your_name + msg; 

//create other variables for calculations
let sign = "The PS Lab";
let tiles = sign.length;
let tile_cost = 5;
let subtotal = tile_cost * tiles;
let shipping = 9;
let total = subtotal+shipping;

const el_sign = document.getElementById('userSign');
el_sign.textContent = sign;

const el_tiles = document.getElementById('tiles');
el_tiles.textContent = tiles;

const el_subtotal = document.getElementById('subTotal');
el_subtotal.textContent = subtotal;

const el_shipping = document.getElementById('shipping');
el_shipping.textContent = shipping;

const el_grandtotal = document.getElementById('grandTotal');
el_grandtotal.textContent = total;