// Get the current year
const currentYear = new Date().getFullYear();
  
// Populate the first paragraph with copyright info
document.getElementById("copyright").innerHTML = `&copy; ${currentYear} Ty Cannon, USA`;
  
// Get the last modified date of the document
const lastModifiedDate = document.lastModified;
  
// Populate the second paragraph with the last modified date
document.getElementById("lastModified").textContent = `Last modified: ${lastModifiedDate}`;

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

const darkModeToggle = document.getElementById('darkModeToggle');

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
        darkModeToggle.textContent = 'Light Mode';
    } else {
        darkModeToggle.textContent = 'Dark Mode';
    }
});
