var btn = document.querySelector(".example");
var start = document.getElementById("start");
var end = document.getElementById("end");
var msg = document.getElementById("status");
var start_game = false;
var hit_div = false;
var finish_game = false;
const divs = document.querySelectorAll(".boundary");

btn.innerHTML = 'Start'
btn.style.textAlign  = "center";

btn.addEventListener("click", (event) => {
    start_game = true;
    finish_game = false
    msg.innerHTML = 'Now you can play'
})

divs.forEach((div) => {
    div.addEventListener("mouseover", (event) => {
        if(start_game && !finish_game){
            hit_div = true;
            divs.forEach((div) => {
                div.style.backgroundColor = "red";
            });
            msg.innerHTML = 'You hit the wall Go back to S and try again'
        }else if(finish_game){
            msg.innerHTML = 'You already finished the game to try again, click start or hover S to play'
        }
        else{
            msg.innerHTML = 'To play the Game click start or over S'
        }
    });
});

start.addEventListener("mouseover", (event) => {
    if(!start_game){
        if(finish_game)
            finish_game = false
        start_game = true
        msg.innerHTML = 'Now you can play'
    }
    if(start_game && !finish_game){
        hit_div = false
        divs.forEach((div) => {
            div.style.backgroundColor = "#eeeeee";
        });
        msg.innerHTML = 'Now you can play'
    }else if(finish_game){
        msg.innerHTML = 'You already finished the game to try again, click start or hover S to play'
    }else{
        msg.innerHTML = 'To play the Game click start or over S'
    }
});

end.addEventListener("mouseover", (event) => {
    if(start_game && !hit_div){
        msg.innerHTML = 'You Win'
        finish_game = true;
        console.log('win')
    }else if(!start_game){
        msg.innerHTML = 'To play the Game click start or over S'
    }else{
        msg.innerHTML = 'Go back to S and try again'
    }
});