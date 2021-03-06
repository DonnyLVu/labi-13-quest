import quests from '../data/data.js';
import { findById } from '../app.js';

const searchParams = new URLSearchParams(window.location.search);
const id = searchParams.get('id');

const quest = findById(quests, id);
const section = document.querySelector('section');

const h2 = document.createElement('h2');

h2.textContent = quest.title;

section.appendChild(h2);


const form = document.createElement('form');

section.appendChild(form);

quest.choices.forEach(choice => {
    const label = document.createElement('label');
    const span = document.createElement('span');

    span.textContent = choice.description;

    const radio = document.createElement('input');
    radio.type = 'radio';
    radio.value = choice.id;
    radio.name = 'choices';

    label.append(span, radio);

    form.appendChild(label);    
});

const button = document.createElement('button');

button.textContent = 'Confirm';

form.appendChild(button); 