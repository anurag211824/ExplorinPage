let menubtn=document.querySelector('.menu-btn');
let sidebar=document.querySelector('.sidebar');
let closebtn=document.querySelector('.close-btn');
const links = document.querySelectorAll(".sidebar li a");

// Example: Add an event listener to all links
links.forEach((link) => {
    link.addEventListener("click", () => {
        sidebar.classList.remove("active");
    });
});

menubtn.addEventListener('click', function() {
    sidebar.classList.toggle("active");
});
closebtn.addEventListener('click', function() {
    sidebar.classList.remove("active");
});