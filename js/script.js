let menuBtn = document.querySelector(".menu-btn");
let mobile_menu = document.querySelector(".mobile-menu");

menuBtn.addEventListener("click", function(){
  mobile_menu.classList.toggle("mobile-menu-active");
  
  if(mobile_menu.classList.contains("mobile-menu-active")){
    menuBtn.classList.add("open");
    document.body.classList.toggle("scroll-hidden")
    // document.body.style.overflow = 'hidden';
  } else{
    menuBtn.classList.remove("open");
    document.body.style.overflow = 'scroll'
  }
});