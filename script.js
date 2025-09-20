let acc = document.getElementsByClassName("accordion");
let menu = document.querySelector(".mobile-menu-container")
let header = document.querySelector(".header")
let burger = document.querySelector(".burger")
const cursor = document.querySelector(".cursor")
let menuItem = document.querySelectorAll(".menu-item")
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {

    this.classList.toggle("active");
    // this.style.padding = "10px";

    let panel = this.nextElementSibling;
    if (panel.style.maxHeight === "150px") {
      panel.style.maxHeight = "0";

    } else {
      panel.style.maxHeight = "150px";

    }
  });
}
let all = document.getElementsByTagName("*");
let j = 0;
let rect
let docWidth = document.documentElement.offsetWidth;
for (; j < all.length; j++) {
  rect = all[i].getBoundingClientRect();
  if (rect.right > docWidth || rect.left < 0) {
    console.log(all[i]);
    all[i].style.borderTop = '1px solid red';
  }
}

burger.addEventListener('click', () => {
  header.classList.toggle('openMenu')
})

menu.addEventListener("mousemove", (e) => {
  console.log(e)
  cursor.style.left = `${e.clientX}px`
    cursor.style.top = `${e.clientY}px`
})

for (item of menuItem) {
  item.addEventListener('mouseenter', () => {
    cursor.style.opacity = "1"
    cursor.style.transform = "translate(-50% , -50%) scale(1)"
  })
}
for (item of menuItem) {
  item.addEventListener('mouseleave', () => {
    cursor.style.opacity = "0"
    cursor.style.transform = "translate(-50% , -50%) scale(0)"
  })
}