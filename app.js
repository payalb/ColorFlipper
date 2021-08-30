const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
document.querySelector("#btn").addEventListener("click", ()=>{
    var color= Math.floor(Math.random()*4)
    document.querySelector(".color").innerHTML=  colors[color];
   // document.querySelector("body").style.backgroundColor=colors[color];
   document.body.style.backgroundColor= colors[color];
})