var btn = document.querySelector(".example");
var start = document.getElementById("start");
var end = document.getElementById("end");
var start_game = false;
var hit_div = false;
const divs = document.querySelectorAll(".boundary");

btn.innerHTML = 'Start'
btn.style.textAlign  = "center";
btn.addEventListener("click", (event) => {
    start_game = true;
})


divs.forEach((div) => {
    div.addEventListener("mouseover", (event) => {
        if(start_game){
            console.log('lose')
            hit_div = true;
            
        }else{
            console.log('must click start to play')

        }

    });
    if(!start_game){
        div.style.backgroundColor = "red";
    }
  });
start.addEventListener("mouseover", (event) => {
    if(start_game){
        hit_div = false
        divs.style.backgroundColor = "#eeeeee";
    }else{
        console.log('must click start to play')
    }
});
end.addEventListener("mouseover", (event) => {
    if(start_game){
        console.log('lose')
        hit_div = true;
    }else{
        console.log('must click start to play')

    }
});