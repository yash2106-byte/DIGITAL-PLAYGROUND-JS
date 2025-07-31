console.log("JavaScript file loaded!");
const button= document.querySelectorAll(".buttons")
console.log("Buttons found:", button.length);
const body= document.body
button.forEach(function (but) {
    console.log(but);
    but.addEventListener('click',function(e){
        console.log(e);
        console.log(e.target);
        if (e.target.id==='white') {
            body.style.backgroundColor = 'grey'
        }
        else if (e.target.id==='red') {
            body.style.backgroundColor = 'red'
        }
        else if (e.target.id==='yellow') {
            body.style.backgroundColor = 'yellow'
        }
        else{
            body.style.backgroundColor = 'green'
        }
    })
})