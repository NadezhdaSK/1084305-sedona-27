var button = document.querySelector(".search-button");
var popup = document.querySelector(".search-form");

popup.classList.add("modal-close");

button.addEventListener("click", function(){
  if (popup.classList.contains("modal-close")) {
    popup.classList.remove("modal-close");
    popup.classList.add("modal-show");
  } else {
    popup.classList.remove("modal-show");
    popup.classList.add("modal-close");
  }
});
