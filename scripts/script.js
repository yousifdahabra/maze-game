var btn = document.querySelector(".example");
var start = document.getElementById("start");
var end = document.getElementById("end");
var start_game = false;
var hit_div = false;
var finish_game = false;
const divs = document.querySelectorAll(".boundary");

btn.innerHTML = 'Start'
btn.style.textAlign  = "center";
btn.addEventListener("click", (event) => {
    start_game = true;
})


divs.forEach((div) => {
    div.addEventListener("mouseover", (event) => {
        if(start_game && !finish_game){
            console.log('lose')
            hit_div = true;
            divs.forEach((div) => {
                div.style.backgroundColor = "red";
            });
        }else if(finish_game){
            console.log('you already finish the game')
        }
        else{
            console.log('must click start to play')
        }
    });
});

start.addEventListener("mouseover", (event) => {
    if(start_game && !finish_game){
        hit_div = false
        divs.forEach((div) => {
            div.style.backgroundColor = "#eeeeee";
        });
    }else if(finish_game){
        console.log('you already finish the game')
    }else{
        console.log('must click start to play')
    }
});
end.addEventListener("mouseover", (event) => {
    if(start_game && !hit_div){
        finish_game = true;
        console.log('win')
    }else if(!start_game){
        console.log('must click start to play')
    }else{
        console.log('hover to S and try again')
    }
});