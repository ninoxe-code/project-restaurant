$(document).ready(function(){
    $("#burger-icon").click(function(){
        $(".nav-slide").slideToggle();
    });
}); 

$(document).ready(function(){
    $("#burger-icon").click(function(){
        $("#burger-icon").toggleClass("fa fa-bars fa fa-times-circle");
    });
});

gsap.from(".section1 h1", {opacity: 0, duration: 1, y: -60})
gsap.from(".section1 h3", {opacity: 0, duration: 1, y: -60, delay: 0.5})
gsap.from(".section8 h1", {opacity: 0, duration: 1, y: -60})
gsap.from(".section8 p", {opacity: 0, duration: 1, y: -60, delay: 0.5})
gsap.from(".reservations-text h4", {opacity: 0, duration: 1, y: -60})
gsap.from("#showIn", {opacity: 0, duration: 1, y: -60, delay: 0.5})

let tl = gsap.timeline({
    
    scrollTrigger: {
        trigger: ".section1",
        scrub: true,
        start: "20%",
        end: "150%"
    }  

});


tl.from("#h21", {opacity: 0, x: -200})
 .from("#p1", {opacity: 0, x: -200, delay: 0.5})
 .from("#img1", {opacity: 0, y: -200, duration: 2, ease: "slow(0.7, 0.7, false)"} )
 .from("#h22", {opacity: 0, x: -200, ease: "slow(0.7, 0.7, false)"})
 .from("#p2", {opacity: 0, x: -200, ease: "slow(0.7, 0.7, false)"})
 .from("#img2", {opacity: 0, y: -200, duration: 2, ease: "slow(0.7, 0.7, false)"})
  




/*$(document).ready(function(){
    $("#appt").click(function(){
        $(".menu1").show();
    });
});
$(document).ready(function(){
    $("#appt").click(function(){
        $(".menu").hidde();
    });
});*/



/*document.getElementById("4").addEventListener("click", function(){
    var cont = document.querySelector(".menu3").innerHTML;
    document.querySelectorAll("all").innerHTML = cont;
})

document.getElementById("2").addEventListener("click", function(){
    var cont1 = document.querySelector(".menu1").innerHTML;
    document.querySelector(".menu, .menu3").innerHTML = cont1;
})

document.getElementById("4").addEventListener("click", function(){
    var cont2 = document.querySelector(".menu3").innerHTML;
    document.querySelectorAll("all").innerHTML = cont2;
})*/
 
$(document).ready(function(){
    $("#drink-list").mouseenter(function(){
        $(".drinks-slide").slideDown();
    });
});

$(document).ready(function(){
    $(".drinks-slide").mouseleave(function(){
        $(".drinks-slide").slideUp();
    });
}); 



var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}


function alertMsg() {
    alert("This link is unavailable at the moment. Please accept our apologies!");
} 