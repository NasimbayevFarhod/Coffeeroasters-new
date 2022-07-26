var elModalOpenButton = document.querySelector(".site-header__btn");
var elModal = document.querySelector(".sitenav");
var elBody = document.querySelector("body");


elModalOpenButton.addEventListener("click", function(){
  elModal.classList.toggle("sitenav-open");
})


elModalOpenButton.addEventListener("click", function(){
  elModalOpenButton.classList.toggle("site-header__btn-close");
})

elModalOpenButton.addEventListener("click", function(){
  elBody.classList.toggle("body-over");
})


