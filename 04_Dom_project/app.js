

// let elemid = document.querySelector('#elem1');



// var elemimg = document.querySelector('#elem1 img');


// elemid.addEventListener('mousemove',function(deta){

// // console.log(deta);


// elemimg.style.left = deta.x+"px";
// elemimg.style.top = deta.y+"px";
// // elemimg.computedStyleMap.top = deta.x+"px";

// })

// elemid.addEventListener('mousemove',function(deta){

//     // console.log(deta);
    
    
//     elemimg.style.opacity = 1;
//     // elemimg.computedStyleMap.top = deta.x+"px";
    
//     })

    
// elemid.addEventListener('mouseleave',function(deta){

//     // console.log(deta);
    
    
//     elemimg.style.opacity = 0;
//     // elemimg.computedStyleMap.top = deta.x+"px";
    
//     })



let elem1 = document.querySelectorAll('.elem');


elem1.forEach(function(value){
    // console.log(value.childNodes[3]);
    value.addEventListener('mouseenter',function(){
        value.childNodes[3].style.opacity = 1
    })
    value.addEventListener('mouseleave',function(){
        value.childNodes[3].style.opacity = 0
    })
})



// elem.forEach(function(value){

//     value.addEventListener('mouseenter',function(){
//         value.childNodes[3].style.opacity = 1;

//     });

// value.addEventListener('mouseleave',function(){
//     value.childNodes[3].opacity = 0;
// })


// })


// console.log(elem.);