function toggleNav() {
    var nav = document.getElementById("myTopnav");
    if (nav.className === "topnav") {
        nav.className += " responsive";
    } else {
        nav.className = "topnav";
    }
}
   // Redirect button logic
   let readMoreButton = document.querySelectorAll('.btn');
    
   readMoreButton.forEach(button => {
       button.addEventListener("click", function() {
           window.location.href = "about.html";
       });
   });
   let readMoreButton1 = document.querySelectorAll('.btn1');
   
   readMoreButton1.forEach(button => {
       button.addEventListener("click", function() {
           window.location.href = "contact.html";
       });
   });
   let readMoreButton2 = document.querySelectorAll('.btn2');
   
   readMoreButton2.forEach(button => {
       button.addEventListener("click", function() {
           window.location.href = "brands.html";
       });
   });

   let readMoreButton3 = document.querySelectorAll('.contbtn');
   
   readMoreButton3.forEach(button => {
       button.addEventListener("click", function() {
           window.location.href = "contact.html";
       });
   });

   let readMoreButton4 = document.querySelectorAll('.dbtn');
    
   readMoreButton4.forEach(button => {
       button.addEventListener("click", function() {
           window.location.href = "drygoods.html";
       });
   });
   let readMoreButton5 = document.querySelectorAll('.fbtn');
   
   readMoreButton5.forEach(button => {
       button.addEventListener("click", function() {
           window.location.href = "frozen.html";
       });
   });
   let readMoreButton6 = document.querySelectorAll('.lbtn');
   
   readMoreButton6.forEach(button => {
       button.addEventListener("click", function() {
           window.location.href = "liqour.html";
       });
   });

   let readMoreButton7 = document.querySelectorAll('.pbtn');
   
   readMoreButton7.forEach(button => {
       button.addEventListener("click", function() {
           window.location.href = "Pharmacy.html";
       });
   });

   let readMoreButton8 = document.querySelectorAll('.compbtn');
   
   readMoreButton8.forEach(button => {
       button.addEventListener("click", function() {
           window.location.href = "company.html";
       });
   });

   let readMoreButton9 = document.querySelectorAll('.tbtn');
   
   readMoreButton9.forEach(button => {
       button.addEventListener("click", function() {
           window.location.href = "team.html";
       });
   });

   let readMoreButton10 = document.querySelectorAll('.hbtn');
   
   readMoreButton10.forEach(button => {
       button.addEventListener("click", function() {
           window.location.href = "healthndbeau.html";
       });
   });

   let readMoreButton11 = document.querySelectorAll('.cubtn');
   
   readMoreButton11.forEach(button => {
       button.addEventListener("click", function() {
           window.location.href = "culture.html";
       });
   });

   document.addEventListener("DOMContentLoaded", function() {
    // Simulate a click on the "Leaders" tab button when the page loads
    document.querySelector(".tab button.tablinks:nth-child(1)").click();
  });
  
  function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }