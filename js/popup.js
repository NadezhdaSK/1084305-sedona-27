var button = document.querySelector(".search-button");
var popup = document.querySelector(".search-form");
var arrival = popup.querySelector("[name=arrival-date]");
var departure = popup.querySelector("[name=departure-date]");
var adult = popup.querySelector("[name=adult-count]");
var child = popup.querySelector("[name=child-count]");

popup.classList.add("modal-close");

button.addEventListener("click", function(){
  if (popup.classList.contains("modal-close")) {
    popup.classList.remove("modal-close");
    popup.classList.add("modal-show");
    arrival.focus();
    } else {
    popup.classList.remove("modal-show");
    popup.classList.add("modal-close");
    popup.classList.remove("modal-error");
  }
});

popup.addEventListener("submit", function(evt) {
  if (!arrival.value || !departure.value || !adult.value || !child.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
    console.log("Нужно заполнить все поля");
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      popup.classList.add("modal-close");
      popup.classList.remove("modal-error");
    }
  }
});