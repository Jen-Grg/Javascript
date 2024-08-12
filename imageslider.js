const arrayImage = ['background.jpg','background2.jpg','background3.jpg']
const arrayLength = arrayImage.length
let i = 0
const demoFunctions = () =>{
    i++
    // if(i>3){
    //     i = 0
    // }
    i = i%arrayLength
    document.querySelector('img').src = `images/${arrayImage[i]}`
}
let set = setInterval(demoFunctions, 1000)//3000 is the millisecon in which interval changes
document.querySelector('.container .left').addEventListener('click', function next(){
    i--
    if (i<0){
        i = 2
    }
    document.querySelector('img').src = `images/${arrayImage[i]}`
})
document.querySelector('.container .right').addEventListener('click', ()=>{
    i++
    i = i%arrayLength
    document.querySelector('img').src = `images/${arrayImage[i]}`
})
document.querySelector('.container').addEventListener('mouseover',()=>{
    clearInterval(set)
})
document.querySelector('.container').addEventListener('mouseout',()=>{
  set = setInterval(demoFunctions,2000)
})