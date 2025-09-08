let acc = document.getElementsByClassName("accordion");
let i;
let plus = document.querySelector('.plus')
let minus = document.querySelector('.minus')

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {

    this.classList.toggle("active");
    this.style.padding = "10px";
   
     


    let panel = this.nextElementSibling;
    if (panel.style.maxHeight === "150px") {
      panel.style.maxHeight = "0";
   
    } else {
      panel.style.maxHeight = "150px";
    
    }
  });
}