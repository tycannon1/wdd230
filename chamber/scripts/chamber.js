// Wait for the DOM content to be fully loaded before executing JavaScript code
document.addEventListener('DOMContentLoaded', function() {
  
    const currentYear = new Date().getFullYear();
    
   
    const copyrightElement = document.getElementById("copyright");
    if (copyrightElement) {
        copyrightElement.innerHTML = `&copy; ${currentYear} Ty Cannon, USA`;
    }

    const lastModifiedDate = document.lastModified;
    
   
    const lastModifiedElement = document.getElementById("lastModified");
    if (lastModifiedElement) {
        lastModifiedElement.textContent = `Last modified: ${lastModifiedDate}`;
    }

    const hamButton = document.querySelector('#menu');
    const navigation = document.querySelector('.navigation');

    if (hamButton && navigation) {
        hamButton.addEventListener('click', () => {
            navigation.classList.toggle('open');
            hamButton.classList.toggle('open');
            document.querySelector('.close-icon').classList.toggle('show');
        });
    }
});