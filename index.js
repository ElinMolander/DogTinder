// Remember to import the data and Dog class!
import {Dog} from './Dog.js'
import {dogs} from './data.js'

let dogsArray = [0,1,2]

function getNewDog(){
    const nextDogdata = dogs[dogsArray.shift()]
    return nextDogdata ? new Dog(nextDogdata) : {}
} 

function endOfSwipe(){
    document.getElementById("dogSection").innerHTML = `
    <div class="dog-section">
    <div class="dog-text">
        <h2 class="dog-name"> No more dogs online...</h2>
        <p class="dog-qvote"> Get a life...</p>
    </div>
     <img id= "img-dog-end" src="images/dog-bella.jpg">
    </div>
    `
}

function swipeDog(){
   if(dogsArray.length > 0){
        setTimeout(()=>{
            dogObject = getNewDog()
            render()
        },1500)
    } else {
        setTimeout(()=>{
            endOfSwipe ()
        },1500)
     }
}

function render(){
    document.getElementById("dogSection").innerHTML = dogObject.getDogHtml()
}

document.getElementById("acceptBtn").addEventListener("click", function(){
    dogObject.hasBeenLiked = true
    render()
    swipeDog()
})

document.getElementById("rejectBtn").addEventListener("click", function(){
   dogObject.hasBeenSwiped = true
   render()
   swipeDog()
})

let dogObject = getNewDog()

render()

console.log(dogObject.getBandge())