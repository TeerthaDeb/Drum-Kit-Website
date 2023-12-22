btns = document.querySelectorAll(".drum");

btns.forEach(element => {

    element.addEventListener("click" , function(){
        console.log(this.innerHTML);
        play_audio(this.innerHTML);
        button_animation(this.innerHTML);
    });
    
});

function play_audio(drum_key) {

    if(drum_key == "w"){
        var sound = new Audio("./sounds/tom-1.mp3");
    }

    else if(drum_key == "a"){
        var sound = new Audio("./sounds/tom-2.mp3");
    }

    else if(drum_key == "s"){
        var sound = new Audio("./sounds/tom-3.mp3");
    }

    else if(drum_key == "d"){
        var sound = new Audio("./sounds/tom-4.mp3");
    }

    else if(drum_key == "j"){
        var sound = new Audio("./sounds/snare.mp3");
    }

    else if(drum_key == "k"){
        var sound = new Audio("./sounds/crash.mp3");
    }

    else if(drum_key == "l"){
        var sound = new Audio("./sounds/kick-bass.mp3");
    }
    
    sound.play();
}

document.addEventListener("keypress" , function(){
    play_audio(event.key);
    button_animation(event.key);
});

function button_animation(key_pressed){
    let btn = document.querySelector("." + key_pressed);
    btn.classList.add("pressed" , "red");
    setTimeout(()=>{
        btn.classList.remove("pressed");
        }, 100);
    
}