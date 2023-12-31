const movingImage = document.getElementById('mower');

const audio = new Audio("Sounds/lawnmower.mp3");
const buttonsoundstart = document.querySelectorAll(".start-mowing");
const buttonsoundstop = document.querySelectorAll(".stop");
const buttonforward = document.querySelectorAll(".forward")
const buttonreverse = document.querySelectorAll(".reverse")
const mower = document.getElementById("mower");
const container = document.getElementById("container");
let moveMowerInterval;
let mowerPosition = 0;


buttonsoundstart.forEach(buttonsoundstart => {
  buttonsoundstart.addEventListener("click", () => {
    audio.volume = 0.2;
    audio.play();
    audio.loop=true;
    isAudioPlaying = true;
  });
});

buttonforward.forEach(buttonforward => {
    buttonforward.addEventListener("click", () => {
    
      if (isAudioPlaying) {  
        moveMowerInterval = setInterval(() => {
            mowerPosition += 2;
            mower.style.left = mowerPosition + "px";
        
        if (mowerPosition >= 1400) {
            
            clearInterval(moveMowerInterval);
            audio.pause();
            const textElement = document.createElement("div");
            textElement.textContent = "Thanks for mowing the grass!";
            textElement.classList.add("text-line"); 
            container.appendChild(textElement);
        }
        
    }, 10);
}
});

buttonsoundstop.forEach(buttonsoundstop => {
    buttonsoundstop.addEventListener("click", () => {
      audio.pause();
      isAudioPlaying = false;
      clearInterval(moveMowerInterval);
        
    });
      
    });
});

buttonreverse.forEach(buttonreverse => {
    buttonreverse.addEventListener("click", () => {
  
    if (isAudioPlaying) {  
        moveMowerInterval = setInterval(() => {
            mowerPosition -= .5;
            mower.style.left = mowerPosition + "px";
            
            if (mowerPosition <= 0) {
                
                clearInterval(moveMowerInterval);
                audio.pause();
               
            }
   
    }, 10);
}  
});


mower.style.bottom = "650px";
mower.style.left = "0px";
});