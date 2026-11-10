import britishShortHair from './britishShortHair.jpg';
import MaineCoon from './MaineCoon.jpg';
import goldenRetriver from './goldenRetriver.jpg';
import corgi from './corgi.jpg';

export const dogs = [
  { id:1, 
    name:"Max", 
    breed:"Golden Retriever", 
    age:2, 
    desc:"Friendly and loves kids", 
    img: goldenRetriver,
    status: "Available"
  },
  { id:2, 
    name:"Bella", 
    breed:"Corgi", 
    age:1, 
    desc:"Energetic, likes walks", 
    img: corgi,
    status: "Available"
  }
]

export const cats = [
  { id:3, 
    name:"Luna", 
    breed:"British Shorthair", 
    age:3, desc:"Calm and quiet", 
    img: britishShortHair,
    status: "Available"
  },
  { id:4, name:"Milo", 
    breed:"Maine Coon", 
    age:2, desc:"Playful, loves toys", 
    img: MaineCoon,
    status: "Available"
  }
]

export const reviews = [
  {
    name: "Amy",
    comment: "I adopted my cat Luna here, the process is smooth and staff are friendly.",
    avatar: require("./amy.jpg")
  },
  {
    name: "John",
    comment: "Great experience! I found my lovely dog quickly.",
    avatar: require("./john.jpg")
  },
  {
    name: "Sue",
    comment: "They provide useful pet care tips, highly recommend!",
    avatar: require("./sue.jpg")
  }
]


export const sampleAdoptForm = { 
  petId:"", 
  fullName:"", 
  email:"", 
  phone:"", 
  homeType:"", 
  reason:"" }
export const sampleReleaseForm = { 
  selectedPet:"",
  petType:"", 
  age:"", 
  reasonForRelease:"", 
  ownerContact:"" 
}
