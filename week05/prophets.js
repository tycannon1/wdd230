const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.prophets); // temporary testing of data retrieval
    displayProphets(data.prophets);
}

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        let card = document.createElement('section');
        let fullName = document.createElement('h2'); // create an h2 element for the full name
        let portrait = document.createElement('img');

        fullName.textContent = `${prophet.firstname} ${prophet.lastname}`; // set the text content to the prophet's full name

        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.firstname} ${prophet.lastname}`); // set the alt attribute to the prophet's full name
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        card.appendChild(fullName); // append the full name element to the card
        card.appendChild(portrait);
        cards.appendChild(card);
    });
}

// Call the function to test the fetch and response
getProphetData();