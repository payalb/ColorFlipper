const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

document.querySelector("#btn").addEventListener("click", ()=>{
        var color= "#"+Math.floor(Math.random()*16777215).toString(16);
        document.querySelector(".color").innerHTML=  color;
        document.querySelector("body").style.backgroundColor=color;
})