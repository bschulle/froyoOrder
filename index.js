const flavorFunction =()=>{
  // get a list of flavors from the user using a prompt
 const listOfFlavors = prompt("What flavors would you like?", "vanilla,vanilla,vanilla,strawberry,coffee,coffee")
 //console.log (listOfFlavors)`
 

// turn the string of flavors into an array
 const arrayOfFlavors = listOfFlavors.split(",")
 //console.log (arrayOfFlavors)

 // //create an object to track the flavors
 const objFlavors ={};
 //loop through the array, add flavor and count 
  for (let i=0; i<arrayOfFlavors.length; i++){
    const currentKeys = Object.keys (objFlavors)
    const currentFlavor = arrayOfFlavors[i]
    //console.log(objFlavors, currentKeys)
      if (currentKeys.includes(currentFlavor)) {
       objFlavors[currentFlavor] = objFlavors[currentFlavor]+1
    }else{
      objFlavors[currentFlavor] = 1
    }
  }
 return objFlavors

}

console.log (flavorFunction())

