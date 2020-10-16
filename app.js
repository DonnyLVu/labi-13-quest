
import { saveUser } from './data/storageUtils.js';


const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(form);

    saveUser({
        name: data.get('name'),
        class: data.get('class'),
        gold: 30,
        hp: 30,
        karma: 0,
        completed: {}
    });
    window.location.href = './map/index.html';
    console.log(saveUser);
});




