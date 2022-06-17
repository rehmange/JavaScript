console.log('Tutorial 21 exercise 2 JavaScript');
/*
You have to create a div and inject it into the page which contains a heading.
whenever someone clicks on the div, it should be converted into an editable item. whenever user clicks away (blur). save the note into the local storage.
*/

let div = document.getElementById('exe2')

let val = localStorage.getItem('text')
console.log(val)
if(val==null){
    let textnode = document.createTextNode("Enter Your Value")
    div.appendChild(textnode)
}
else{
    div.innerText = val
}

// console.log(div)
div.addEventListener('click' ,function(e){
    console.log('clicked')
    div.setAttribute('contenteditable','true')
    console.log(div)

    div.addEventListener('blur',function(){
           let value = div.innerText
           localStorage.setItem('text', value) 
           console.log(value)
    })

})


