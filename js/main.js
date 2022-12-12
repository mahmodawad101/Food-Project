$(document).ready(function(){
    $('.list').click(function () { 
        $('.navbar').slideToggle(400);
        
    });
});
let navLinks = document.querySelectorAll(".navbar li");
navLinks.forEach(link =>{
    link.addEventListener('click',function(e){
        navLinks.forEach(ele =>{
            ele.classList.remove('lin-active')
        });
        e.currentTarget.classList.add('lin-active')
    });
});
// ScrollReveal().reveal('.box:nth-child(even)', { delay: 200 });
// ScrollReveal().reveal('.box:nth-child(odd)', { delay: 300 });