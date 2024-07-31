var container = document.querySelector(".container")
// // console.log(container)
// var subContainer = document.querySelectorAll(".subContainer div")
// // console.log(subContainer)
// var heading = document.createElement("h1")

// for (let i = 0; i < subContainer.length; i++) {
//     subContainer[i].addEventListener("click", () => {
//         var mainColor = (subContainer[i].getAttribute("style"))
//         container.setAttribute("style", mainColor)
//         heading.innerHTML = mainColor
//         container.appendChild(heading)
//         // container.style.backgroundColor=subContainer[i].style.backgroundColor
//     })
// }

// var x = document.getElementsByClassName("subContainer")
// console.log(x)
// var timeOut=setTimeout(()=>{
//  console.log("Welcome1")   
// },2000)
// var timeOut2=setTimeout(()=>{
//  console.log("Welcome2")   
// },2000)
// var timeOut3=setTimeout(()=>{
//  console.log("Welcome3")   
// },2000)
// var timeOut4=setTimeout(()=>{
//  console.log("Welcome4")   
// },2000)

// console.log(timeOut,timeOut2,timeOut3,timeOut4)

// container.addEventListener("click",()=>{
//     clearTimeout(timeOut)
//     clearTimeout(timeOut4)
// })



// var spinner = document.querySelector('.spinner')
// setTimeout(()=>{
// spinner.style.display="none"
// },5000)

// function randomColor(){
//     var red = Math.ceil(Math.random()*255);
//     var green = Math.ceil(Math.random()*255);
//     var blue = Math.ceil(Math.random()*255);
    return `rgb(${red},${green},${blue})`
// }
// setInterval(()=>{
//     // console.log("Welcome")
//     container.style.backgroundColor=randomColor();
// },5000)
var image = document.querySelector('img');
var images = ['bg.gif', 'bg.jpeg', 'cat.jpg', 'xbox.jpg']
var i = 0;
setInterval(() => {
    if (i == images.length) {
        i = 0
    }
    image.setAttribute("src", `./images/${images[i]}`)
    i++;
}, 2000)