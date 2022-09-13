// Create the Dog class here

import {dogs} from './data.js'

class Dog{
    constructor(data){
        Object.assign(this, data)
    }
    
    getBandge(){
       if (this.hasBeenLiked){
            return `<img class="badge"src="images/badge-like.png"></img>`
        } else if (this.hasBeenSwiped){
            return `<img class="badge"src="images/badge-nope.png"></img>`
        } else {
            return ""
        }
    }
 
    getDogHtml() {
      const{name, avatar, age, bio, hasBeenSwiped, hasBeenLiked} = this
      const bandge = this.getBandge()
      return `
      <div class="dog-section">
            ${bandge}
            <div class="dog-text">
                <h2 class="dog-name">${name}, ${age}</h2>
                <p class="dog-qvote">${bio}</p>
            </div>
             <img id= "img-dog" src="${avatar}">
        </div>`
    }
}
















export {Dog}