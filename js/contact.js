
const arrow = document.getElementById("arrow");
const contactBox = document.querySelector(".contact_box");
arrow.addEventListener('click', ()=>{
    if(arrow.classList.contains("xi-angle-up-thin")){
        arrow.classList.remove("xi-angle-up-thin");
        arrow.classList.add("xi-angle-down-thin");
    }
    else{
        arrow.classList.remove("xi-angle-down-thin");
        arrow.classList.add("xi-angle-up-thin");
    }
  
  contactBox.classList.toggle('contact_box_toggle');
});
