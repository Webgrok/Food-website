document.querySelector(".menu").addEventListener(
  "click",
  () => {
    document.querySelectorAll(".target").forEach((item) => {
      item.classList.toggle("change");
    });
  },
  false
);
var icons = document.querySelectorAll(".section-1-icons i");
var i = 1;

setInterval(() => {
  i++;
  var icon = document.querySelector(".section-1-icons i.change");
  icon.classList.remove("change");
  if (i > icons.length) {
    icons[0].classList.add("change");
    i = 1;
  } else {
    icon.nextElementSibling.classList.add("change");
  }
}, 3000);