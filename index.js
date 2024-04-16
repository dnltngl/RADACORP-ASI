
// Sticky Navigation Menu JS Code
let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");
console.log(scrollBtn);
let val;
window.onscroll = function() {
  if(document.documentElement.scrollTop > 20){
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  }else{
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }

}

// Side NavIgation Menu JS Code
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");
menuBtn.onclick = function(){
  navBar.classList.add("active");
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  body.style.overflow = "hidden";
  scrollBtn.style.pointerEvents = "none";
}
cancelBtn.onclick = function(){
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflow = "auto";
  scrollBtn.style.pointerEvents = "auto";
}

// Side Navigation Bar Close While We Click On Navigation Links
let navLinks = document.querySelectorAll(".menu li a");
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click" , function() {
    navBar.classList.remove("active");
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
  });
}

var name = document.getElementById('name');
var email = document.getElementById('email');
var Date_of_Subscription = document.getElementById('Date_of_Subscription');
var End_of_Subscription = document.getElementById('End_of_Subscription');
console.log(name, email);



// emailjs.send("service_zhf2ybn","template_rrddjj4",{
//   from_name: "albrto",
//   to_name: "daniel",
//   message: "testo",
//   });


// document.getElementById("contact-form").addEventListener("submit", function(event) {
//         event.preventDefault(); // Prevent default form submission
        
//         // Get form data
//         var formData = new FormData(this);
//         // Convert formData to URL encoded string
//         var urlEncodedData = new URLSearchParams(formData).toString();
//         // URL of your Google Form
//         var googleFormURL = ""https://forms.gle/R4LypN4FPNiyibPv8; // Replace with your actual Google Form URL
        
//         // Submit form data to Google Form
//         fetch(googleFormURL, {
//             method: 'POST',
//             mode: 'no-cors', // CORS policy for Google Forms
//             headers: {
//                 'Content-Type': 'application/x-www-form-urlencoded',
//             },
//             body: urlEncodedData
//         })
//         .then(response => {
//             // Optionally, you can handle the response here (e.g., display a success message)
//             console.log("Form submitted successfully");
//         })
//         .catch(error => {
//             // Handle errors here
//             console.error("Error submitting form:", error);
//         });
//     });