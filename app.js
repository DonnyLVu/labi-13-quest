
import { saveUser } from './data/storageUtils.js';

const form = document.querySelector('form');

// initialize state
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const user = {
        name: data.get('name'),
        class: data.get('class'),
        gold: 0,
        hp: 30,
        karma: 0,
        completed: {}
    };

    window.location.href = './map/index.html';
    saveUser(user);
    console.log(user);

});


export function findById(someArray, someId) {
    for (let i = 0; i < someArray.length; i++) {
        const item = someArray[i];
        if (item.id === someId) {
            return item;
        }
    }
}







// // Random Number Gen for possibly make hit chance?
// function getRandomNumber(0, 10) {
//     return Math.random() * (10 - 0) + 0;
//   }