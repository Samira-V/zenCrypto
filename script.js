let acc = document.getElementsByClassName("accordion");
console.log(acc)
let i;
// let plus = document.querySelector('.plus')
// let minus = document.querySelector('.minus')

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
    if (rect.right > docWidth || rect.left < 0){
        console.log(all[i]);
        all[i].style.borderTop = '1px solid red';
    }
}