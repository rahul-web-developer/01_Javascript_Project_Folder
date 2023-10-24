var arr = [
    {dp:"https://images.pexels.com/photos/18748936/pexels-photo-18748936/free-photo-of-a-bride-and-groom-standing-in-front-of-the-eiffel-tower.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    story:"https://images.pexels.com/photos/16529985/pexels-photo-16529985/free-photo-of-woman-in-red-fur-posing-in-front-of-paris-cityscape.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",

}
]



var clutter = "";


arr.forEach(function(elem){


    clutter += `<div class="story"><img id="" src="${elem.dp}" alt=""> </div>`
})







let storiya = document.querySelector('#storiya')

storiya.innerHTML = clutter

console.log(clutter);

