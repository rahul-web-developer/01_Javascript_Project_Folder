

var arr = [
    {dp:"https://images.pexels.com/photos/16529985/pexels-photo-16529985/free-photo-of-woman-in-red-fur-posing-in-front-of-paris-cityscape.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",

    story: "https://images.pexels.com/photos/18704272/pexels-photo-18704272/free-photo-of-young-men-hold-umbrella.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",

},

{dp:"https://images.pexels.com/photos/16529985/pexels-photo-16529985/free-photo-of-woman-in-red-fur-posing-in-front-of-paris-cityscape.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",

story: "https://images.pexels.com/photos/18704272/pexels-photo-18704272/free-photo-of-young-men-hold-umbrella.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",

},

{dp:"https://images.pexels.com/photos/16529985/pexels-photo-16529985/free-photo-of-woman-in-red-fur-posing-in-front-of-paris-cityscape.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",

story: "https://images.pexels.com/photos/18704272/pexels-photo-18704272/free-photo-of-young-men-hold-umbrella.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",

},

{dp:"https://images.pexels.com/photos/16529985/pexels-photo-16529985/free-photo-of-woman-in-red-fur-posing-in-front-of-paris-cityscape.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",

story: "https://images.pexels.com/photos/18704272/pexels-photo-18704272/free-photo-of-young-men-hold-umbrella.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",

}

]


// console.log(arr)


var clutter = " ";



arr.forEach(function(elem,index){

    clutter+= `<div class="story"><img id="${index}" src="${elem.dp}" alt=""> </div>`

});


var storia = document.querySelector('#storiya')

storia.innerHTML = clutter;


storia.addEventListener('click',function(deta){

    var full = document.querySelector('.full-screen');

    full.style.display = "block";

    full.style.backgroundImage = `url(${arr[deta.target.id].story})`

    // console.log(arr[1]);


    setTimeout(() => {
        full.style.display = "none";
        
    }, 3000);

  
})



// storia.addEventListener('mouseenter',function(deta){
    
//     var full = document.querySelector('.full-screen');

//     full.style.display = "block";

//     full.style.backgroundImage = `url(${arr[deta.target.id].dp})`

//     console.log('db');


//     setTimeout(() => {
//         full.style.display = "none";
        
//     }, 3000);

// })