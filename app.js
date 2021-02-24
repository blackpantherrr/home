const logo = document.querySelectorAll("#logo path");

console.log(logo);

const vPath = "M57.5 114L0.77533 0.75L57.5 74.5L114.225 0.75L57.5 114Z"
const jPath = "M123.5 1L180.225 114.25H66.7753L146 93L123.5 1Z" 

const veePath = "M57.5 114L0.77533 0.75L114.225 0.75L57.5 114Z"
const jayPath = "M123.5 1L180.225 114.25H66.7753L123.5 1Z"

const nameTag = document.querySelector("#nametag");

let toggle = false;

nameTag.addEventListener('click', () => {

    //use anime.js

    //setup TIMELINE
    const timeline = anime.timeline({
        duration : 500, 
        easing : "easeOutExpo"
    });

    //add different animations to timeline
    timeline.add({
        targets: ".v",
        d: [
            {value: toggle ? veePath : vPath}
        ]
    });

    timeline.add({
        targets: "body",
        backgroundColor: toggle ? 'rgb(3, 28, 31)' : "rgb(22,22,22)"
    }, "-= 700"
    );

    timeline.add({
        targets: "section",
        backgroundColor: toggle ? 'rgb(3, 28, 31)' : "rgb(22,22,22)"
    }, "-= 700"
    );

    //toggle switch
    if(!toggle){
        toggle = true;
    }else{
        toggle = false;
    }
})
