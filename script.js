const mn = document.getElementsByClassName("menu");
const act = document.getElementsByClassName("active");

const sec1 = document.getElementById("idsec1");
const sec2 = document.getElementById("idsec2");
const sec3 = document.getElementById("idsec3");
const sec4 = document.getElementById("idsec4");

let korSec1 = sec1.offsetTop;
let korSec2 = sec2.offsetTop;
let korSec3 = sec3.offsetTop;
let korSec4 = sec4.offsetTop;

for (let i = 0; i < mn.length; i++) {
    mn[i].addEventListener("click", function(){
        if (this == mn[0]) {
            document.documentElement.scrollTop = korSec1;
        }
        else if (this == mn[1]) {
            document.documentElement.scrollTop = korSec2;
        }
        else if (this == mn[2]) {
            document.documentElement.scrollTop = korSec3;
        }
        else if (this == mn[3]) {
            document.documentElement.scrollTop = korSec4;
        }
    });    
}

window.addEventListener("scroll", function(){
    if (document.documentElement.scrollTop >= korSec4) {
        act[0].classList.remove("active");
        mn[3].classList.add("active");
    }
    else if (document.documentElement.scrollTop >= korSec3) {
        act[0].classList.remove("active");
        mn[2].classList.add("active");
    }
    else if (document.documentElement.scrollTop >= korSec2) {
        act[0].classList.remove("active");
        mn[1].classList.add("active");
    }
    else if (document.documentElement.scrollTop >= korSec1) {
        act[0].classList.remove("active");
        mn[0].classList.add("active");
    }
});