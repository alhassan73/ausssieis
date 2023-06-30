var nystories = document.querySelector("p").offsetTop;
window.onscroll = function() {
  if (window.pageYOffset > 0) {
 var opac = (window.pageYOffset / nystories);
    console.log(opac);
  document.body.style.background = "linear-gradient(rgba(255, 255, 255, " + opac + "), rgba(255, 255, 255, " + opac + ")), url() no-repeat";
  }
}

var typed = new Typed(".auto-type", {
  strings:["Us"," What Encourage us to Success"],
  typeSpeed:95,
  backSpeed:95,
  loop :true
          });


          
    


          var isScrolled = false; // Flag variable to track scroll state

          window.onscroll = function() {
            scrollFunction();
          };
          
          window.onresize = function() {
            scrollFunction();
          };
          
          function scrollFunction() {
            var navbar = document.getElementById("navbar");
            var specify1 = document.getElementById("specify1");
            var specify2 = document.getElementById("specify2");
            var specify3 = document.getElementById("specify3");
            var specify4 = document.getElementById("specify4");
            var specify5 = document.getElementById("specify5");
            var specify6 = document.getElementById("specify6");

          
            if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
              navbar.style.background = "#fff";
              navbar.style.boxShadow = " 0px 2px 20px #0009";
              specify1.style.color = "#313247";
              specify2.style.color = "#313247";
              specify3.style.color = "#313247";
              specify4.style.color = "#313247";
              specify5.style.color = "#313247";
              specify6.style.color = "#313247";
              isScrolled = true; // Set the flag to true when scrolled
            } 
             else {
              if (!isScrolled || window.innerWidth <= 767) {
                navbar.style.background = "none";
                specify1.style.color = "#313247";
                specify2.style.color = "#313247";
                specify3.style.color = "#313247";
                specify4.style.color = "#313247";
                specify5.style.color = "#313247";
                specify6.style.color = "#313247";
                navbar.style.boxShadow = "none";
              }
              else{
                navbar.style.background ="none";
                specify1.style.color ="#FFF";
                specify2.style.color ="#FFF";
                specify3.style.color ="#FFF";
                specify4.style.color ="#FFF";
                specify5.style.color ="#FFF";
                specify6.style.color ="#FFF";
                navbar.style.boxShadow = "none";
              }
            }
          }

          var initialImg = "./img/logo1.png";
          var scrollImg = "./img/logo2.png";
          var initialWidth = "250px";
          var scrollWidth = "250px"; // Adjust the desired width value
          
          $(window).scroll(function() {
            var value = $(this).scrollTop();
            var logo = $("#logo-img img");
            if (value > 30) {
              logo.attr("src", scrollImg);
              logo.css("width", scrollWidth);
            } else {
              logo.attr("src", initialImg);
              logo.css("width", initialWidth);
            }
          });
          
var scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Show or hide the scroll-to-top button based on scroll position
function toggleScrollToTopButton() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    scrollToTopBtn.classList.add("show");
  } else {
    scrollToTopBtn.classList.remove("show");
  }
}

scrollToTopBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

window.addEventListener("scroll", function () {
  toggleScrollToTopButton();
});


  


var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  keyboard: {
    enabled: true,
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
   
  },
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
    clickable:true,
  },
  
});

  

function removeHash() {
  setTimeout(function() {
    history.replaceState("", document.title, window.location.pathname + window.location.search);
  }, 0); // 
}


// Remove "index.html" from URL displayed in the address bar
function removeIndexHtml() {
  var currentUrl = window.location.href;
  var newUrl = currentUrl.replace('/index.html', '/');
  window.history.replaceState({}, '', newUrl);
}

// Call the function when the page finishes loading
window.addEventListener('load', removeIndexHtml);
