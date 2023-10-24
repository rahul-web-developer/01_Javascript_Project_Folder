


let mainselect = document.querySelector('#main');


let cursor = document.querySelector('.cursor');


mainselect.addEventListener('mousemove',function(dets){

    // cursor.
    // console.log(dets.y)

    cursor.style.left =  dets.x+"px";
    cursor.style.right =  dets.x+"px";
    cursor.style.bottom =  dets.y+"px";
    cursor.style.top =  dets.y+"px";
    mainselect.style.color = "blue";


    console.log("x accces value is = " , dets.x);
    console.log("y acces value is = ", dets.y);

})