const home = document.getElementById("home");
const about = document.getElementById("about");
const exit = document.getElementById("exit");
const blink = document.getElementById("blinkerhome");

let array = [home, about, exit]

for(let i = 0; i<array.length; i++){

function Display(name){
    this.name = name

        name.addEventListener("click", function(){
            let the = document.getElementById(`blinker${name.id}`)
            if(the.classList.contains("active")){
                the.classList.remove("active")
            }else (the.classList.add("active"))
            for(let i = 0; i < array.length; i++){
                if(array[i].id != name.id){
                    let removal = document.getElementById(`blinker${array[i].id}`)
                    removal.classList.remove("active")
                }
            }
        })
    }
        Display(array[i])
    }
