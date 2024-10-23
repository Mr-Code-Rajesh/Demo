/* navbar scolling animation */
window.addEventListener("scroll",()=>{

  const navAnimation = document.getElementById("nav");
  if(window.scrollY>0){
    navAnimation.classList.add("nav-bg-color");
  }else{
    navAnimation.classList.remove("nav-bg-color");
  }

});



/* navbar scolling animation end */



