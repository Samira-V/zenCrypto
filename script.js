let acc = document.getElementsByClassName("accordion");
let i;
let plus = document.querySelector('.plus')
let minus = document.querySelector('.minus')

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {

    this.classList.toggle("active");
    this.style.padding = "10px";
   
     


    let panel = this.nextElementSibling;
    if (panel.style.height === "150px") {
      panel.style.height = "0";
   
    } else {
      panel.style.height = "150px";
    
    }
  });
}