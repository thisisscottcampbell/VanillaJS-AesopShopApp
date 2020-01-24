import { albumsArray, cart } from '../albumsArray.js';
import { renderCartLine } from './renderCartLine.js';
import { findById, toUSD, calcOrderTotal } from '../utils.js';


const tableBody = document.querySelector('tbody');
const orderTotalCell = document.getElementById('order-total-cell');

for (let i = 0; i < cart.length; i++) {
    const cartItem = cart[i];
    const album = findById(cartItem.id, albumsArray);
    const albumMatch = renderCartLine(album, cartItem);
    tableBody.appendChild(albumMatch);  
}


const amountTotal = calcOrderTotal(albumsArray, cart);
console.log(amountTotal);
orderTotalCell.textContent = toUSD(amountTotal);
