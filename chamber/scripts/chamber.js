// // Wait for the DOM content to be fully loaded before executing JavaScript code
// document.addEventListener('DOMContentLoaded', function() {
  
//     const currentYear = new Date().getFullYear();
    
   
//     const copyrightElement = document.getElementById("copyright");
//     if (copyrightElement) {
//         copyrightElement.innerHTML = `&copy; ${currentYear} Ty Cannon, USA`;
//     }

//     const lastModifiedDate = document.lastModified;
    
   
//     const lastModifiedElement = document.getElementById("lastModified");
//     if (lastModifiedElement) {
//         lastModifiedElement.textContent = `Last modified: ${lastModifiedDate}`;
//     }

//     const hamButton = document.querySelector('#menu');
//     const navigation = document.querySelector('.navigation');

//     if (hamButton && navigation) {
//         hamButton.addEventListener('click', () => {
//             navigation.classList.toggle('open');
//             hamButton.classList.toggle('open');
//             document.querySelector('.close-icon').classList.toggle('show');
//         });
//     }
//     if (typeof(Storage) !== "undefined") {
//         // Check if this is the user's first visit
//         if (!localStorage.getItem("lastVisit")) {
//             // Display welcome message
//             document.getElementById("message").textContent = "Welcome! Let us know if you have any questions.";
//         } else {
//             // Get the last visit date from localStorage
//             var lastVisit = new Date(localStorage.getItem("lastVisit"));
//             // Get the current date
//             var currentDate = new Date();
//             // Calculate the time difference in milliseconds
//             var timeDifference = currentDate.getTime() - lastVisit.getTime();
//             // Calculate the number of days between visits
//             var daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            
//             // Check if the time between visits is less than a day
//             if (daysDifference < 1) {
//                 // Display message for visits less than a day
//                 document.getElementById("message").textContent = "Back so soon! Awesome!";
//             } else {
//                 // Display message for visits more than a day
//                 if (daysDifference === 1) {
//                     document.getElementById("message").textContent = "You last visited 1 day ago.";
//                 } else {
//                     document.getElementById("message").textContent = "You last visited " + daysDifference + " days ago.";
//                 }
//             }
//         }
//         // Store the current visit date in localStorage
//         localStorage.setItem("lastVisit", new Date());
//     } else {
//         // If localStorage is not supported, display an error message
//         document.getElementById("message").textContent = "Sorry, your browser does not support web storage...";
//     }
//     document.addEventListener("DOMContentLoaded", function() {
//         var images = document.querySelectorAll(".photos-of-interest img");
    
//         function lazyLoad() {
//             images.forEach(function(img) {
//                 if (img.getBoundingClientRect().top < window.innerHeight && !img.classList.contains("loaded")) {
//                     img.src = img.dataset.src;
//                     img.classList.add("loaded");
//                 }
//             });
//         }
    
//         lazyLoad();
    
//         window.addEventListener("scroll", lazyLoad);
//     });
// });

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

    if (typeof(Storage) !== "undefined") {
        // Check if this is the user's first visit
        if (!localStorage.getItem("lastVisit")) {
            // Display welcome message
            document.getElementById("message").textContent = "Welcome! Let us know if you have any questions.";
        } else {
            // Get the last visit date from localStorage
            var lastVisit = new Date(localStorage.getItem("lastVisit"));
            // Get the current date
            var currentDate = new Date();
            // Calculate the time difference in milliseconds
            var timeDifference = currentDate.getTime() - lastVisit.getTime();
            // Calculate the number of days between visits
            var daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            
            // Check if the time between visits is less than a day
            if (daysDifference < 1) {
                // Display message for visits less than a day
                document.getElementById("message").textContent = "Back so soon! Awesome!";
            } else {
                // Display message for visits more than a day
                if (daysDifference === 1) {
                    document.getElementById("message").textContent = "You last visited 1 day ago.";
                } else {
                    document.getElementById("message").textContent = "You last visited " + daysDifference + " days ago.";
                }
            }
        }
        // Store the current visit date in localStorage
        localStorage.setItem("lastVisit", new Date());
    } else {
        // If localStorage is not supported, display an error message
        document.getElementById("message").textContent = "Sorry, your browser does not support web storage...";
    }
// // Wait for the DOM content to be fully loaded before executing JavaScript code
// document.addEventListener('DOMContentLoaded', function() {
  
//     const currentYear = new Date().getFullYear();
    
   
//     const copyrightElement = document.getElementById("copyright");
//     if (copyrightElement) {
//         copyrightElement.innerHTML = `&copy; ${currentYear} Ty Cannon, USA`;
//     }

//     const lastModifiedDate = document.lastModified;
    
   
//     const lastModifiedElement = document.getElementById("lastModified");
//     if (lastModifiedElement) {
//         lastModifiedElement.textContent = `Last modified: ${lastModifiedDate}`;
//     }

//     const hamButton = document.querySelector('#menu');
//     const navigation = document.querySelector('.navigation');

//     if (hamButton && navigation) {
//         hamButton.addEventListener('click', () => {
//             navigation.classList.toggle('open');
//             hamButton.classList.toggle('open');
//             document.querySelector('.close-icon').classList.toggle('show');
//         });
//     }
//     if (typeof(Storage) !== "undefined") {
//         // Check if this is the user's first visit
//         if (!localStorage.getItem("lastVisit")) {
//             // Display welcome message
//             document.getElementById("message").textContent = "Welcome! Let us know if you have any questions.";
//         } else {
//             // Get the last visit date from localStorage
//             var lastVisit = new Date(localStorage.getItem("lastVisit"));
//             // Get the current date
//             var currentDate = new Date();
//             // Calculate the time difference in milliseconds
//             var timeDifference = currentDate.getTime() - lastVisit.getTime();
//             // Calculate the number of days between visits
//             var daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            
//             // Check if the time between visits is less than a day
//             if (daysDifference < 1) {
//                 // Display message for visits less than a day
//                 document.getElementById("message").textContent = "Back so soon! Awesome!";
//             } else {
//                 // Display message for visits more than a day
//                 if (daysDifference === 1) {
//                     document.getElementById("message").textContent = "You last visited 1 day ago.";
//                 } else {
//                     document.getElementById("message").textContent = "You last visited " + daysDifference + " days ago.";
//                 }
//             }
//         }
//         // Store the current visit date in localStorage
//         localStorage.setItem("lastVisit", new Date());
//     } else {
//         // If localStorage is not supported, display an error message
//         document.getElementById("message").textContent = "Sorry, your browser does not support web storage...";
//     }
//     document.addEventListener("DOMContentLoaded", function() {
//         var images = document.querySelectorAll(".photos-of-interest img");
    
//         function lazyLoad() {
//             images.forEach(function(img) {
//                 if (img.getBoundingClientRect().top < window.innerHeight && !img.classList.contains("loaded")) {
//                     img.src = img.dataset.src;
//                     img.classList.add("loaded");
//                 }
//             });
//         }
    
//         lazyLoad();
    
//         window.addEventListener("scroll", lazyLoad);
//     });
// });

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

    if (typeof(Storage) !== "undefined") {
        // Check if this is the user's first visit
        if (!localStorage.getItem("lastVisit")) {
            // Display welcome message
            document.getElementById("message").textContent = "Welcome! Let us know if you have any questions.";
        } else {
            // Get the last visit date from localStorage
            var lastVisit = new Date(localStorage.getItem("lastVisit"));
            // Get the current date
            var currentDate = new Date();
            // Calculate the time difference in milliseconds
            var timeDifference = currentDate.getTime() - lastVisit.getTime();
            // Calculate the number of days between visits
            var daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            
            // Check if the time between visits is less than a day
            if (daysDifference < 1) {
                // Display message for visits less than a day
                document.getElementById("message").textContent = "Back so soon! Awesome!";
            } else {
                // Display message for visits more than a day
                if (daysDifference === 1) {
                    document.getElementById("message").textContent = "You last visited 1 day ago.";
                } else {
                    document.getElementById("message").textContent = "You last visited " + daysDifference + " days ago.";
                }
            }
        }
        // Store the current visit date in localStorage
        localStorage.setItem("lastVisit", new Date());
    } else {
        // If localStorage is not supported, display an error message
        document.getElementById("message").textContent = "Sorry, your browser does not support web storage...";
    }

    var images = document.querySelectorAll(".photos-of-interest img");

    document.addEventListener('DOMContentLoaded', function() {
        // Select all images within the 'photos-of-interest' section
        const images = document.querySelectorAll('.photos-of-interest img');
    
        function lazyLoad() {
            images.forEach(img => {
                // Check if the image is in the viewport
                if (img.getBoundingClientRect().top < window.innerHeight && !img.classList.contains('loaded')) {
                    // Replace the 'src' attribute with the value from 'data-src'
                    img.src = img.getAttribute('data-src');
                    // Add the 'loaded' class to prevent re-loading
                    img.classList.add('loaded');
                }
            });
        }
    
        // Initial lazy load
        lazyLoad();
    
        // Lazy load on scroll
        window.addEventListener('scroll', lazyLoad);
    });
});
});