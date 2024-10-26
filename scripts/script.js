var btn = document.querySelector(".example");
var start_game = false;
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

        }else{
            console.log('must click start to play')

        }

    });
  });
