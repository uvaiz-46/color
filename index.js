let col = document.getElementById ("col");
let colorplay = document.getElementById ("colorplay");  
let colimg = document.getElementById ("colimg");
let hh = document.getElementById ("hh");

col.addEventListener('input',function(){
    let selectedcol = col.value;
    // colorplay.style.backgroundColor = selectedcol;
    colimg.style.backgroundColor = selectedcol;
    hh.style.color = selectedcol;
   colorplay.innerHTML="color value =  "+selectedcol
})