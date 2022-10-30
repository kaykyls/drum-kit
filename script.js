const key = document.querySelectorAll(".key")
const audio = document.querySelectorAll("audio")
const keys = ["q", "w", "e", "a", "s", "d", "z", "x", "c"]

window.addEventListener("keydown", (event) => {
    if(keys.includes(event.key)){
        playAudio(keys.indexOf(event.key))     
    }
})

key.forEach(key => key.addEventListener("transitionend", (event) => {
    if(event.propertyName !== "transform"){
       return 
    } 
    key.classList.remove("playing")
}))

for(let i = 0; i < keys.length; i++){
    key[i].addEventListener("click", () => {
        playAudio(i)
    })
}

function playAudio(i) {
    audio[i].currentTime = 0
    audio[i].play()
    key[i].classList.add("playing") 
}