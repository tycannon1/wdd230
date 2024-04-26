// Get the current year
const currentYear = new Date().getFullYear();
  
// Populate the first paragraph with copyright info
document.getElementById("copyright").innerHTML = `&copy; ${currentYear} Ty Cannon, USA`;
  
// Get the last modified date of the document
const lastModifiedDate = document.lastModified;
  
// Populate the second paragraph with the last modified date
document.getElementById("lastModified").textContent = `Last modified: ${lastModifiedDate}`;