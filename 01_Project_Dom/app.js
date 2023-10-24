

let btn = document.querySelector('#btn');


let status = document.querySelector('h3');


// btn.style.color = "red"
let btn1 = 0;


function togle(){

    if(btn1 == 0 ){
        btn.style.color = "red";
        btn.innerHTML = "friends";
        status.innerHTML = "follow"

btn1 =1;
    }else{
        btn.style.color = "black";
        btn.innerHTML = " Add friend";
        status.innerHTML = "unfollow"

        btn1 = 0;

    }

}
btn.addEventListener('click',togle)