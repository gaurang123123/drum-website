let my = document.querySelectorAll('.drum');
for(let button of my){
    button.addEventListener("click",(e)=>{
        // console.log(e.target.innerText);
        Soundplay(e.target.innerText);
        animationAdd(e.target.innerText);
     });
}

document.addEventListener("keypress",(e)=>{
    Soundplay(e.key);
    animationAdd(e.key);
//    console.log(e.key)
})
function Soundplay(value){
     switch(value){
        case "w":
            var audio = new Audio("sounds/tom-1.mp3")
            audio.play();
            break;
        case "a":
          var audio = new Audio("sounds/tom-2.mp3")
          audio.play();
          break;
        case "s":
        var audio = new Audio("sounds/tom-3.mp3")
        audio.play();
        break; 
        case "d":
            var audio = new Audio("sounds/tom-4.mp3")
            audio.play();
            break; 
            case "j":
                var audio = new Audio("sounds/snare.mp3")
                audio.play();
                break; 
                case "k":
                    var audio = new Audio("sounds/kick-bass.mp3")
                    audio.play();
                    break; 
                    case "l":
                        var audio = new Audio("sounds/crash.mp3")
                        audio.play();
                        break; 
                        default:
                            alert("Invalid input");
                            break; 
     }
   
}
function animationAdd(currentKey){
    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");
  
    setTimeout(function() {
      activeButton.classList.remove("pressed");
    }, 100);
  
}