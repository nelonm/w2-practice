let array = ["alma", 12, false, undefined, null]

console.log (array)

let stringArray = ["Imola Ács", "Pali Herrer", "Nagy Zsombor"]

console.log(stringArray[1])

let myObj = {
    key1: "value1",
    key2: "value2",
    key3: "value3",
    key4: 15,
    key5: 600,
    key6: true,
    key7: ["Imola Ács", "Pali Herrer", "Nagy Zsombor"]
}

console.log (myObj)
console.log (myObj.key1)
console.log (myObj.key7[2])


let myFaceBook = {
    name: "Márta Richárd",
    age: 28,
    location: "Budapest",
    friends: ["Gipsz Jakab", "John Doe", "Példa Péter"],
    favoriteMovies: [
        {title: "Harry Potter",
        year: 2001,
        characters: ["Ronald Weasley", "Hedwig"]
        },{
            title: "Üvegtigris",
            year: 2004
        }
    ]
}

console.log (myFaceBook.favoriteMovies[0].characters[2])

function negativeOrPositive(number) {
    if (number < 0) {
        return "negative"
    } else if (number > 0) {
        return "positive"
    } else {
        return "zero"
    }
    
}

function logger (text) {
    console.log (text)
}

logger (negativeOrPositive(-5))

function decideIfBeerIsGood (beer) {
    if (beer.price < 340 && beer.abv > 4.7) {
        return beer.name ": jó sör, mert üt és olcsó"
    } else if (beer.price < 340) {
        return beer.name ": jó sör, mert olcsó"
    } else if (beer.abv > 4.7) {
        return beer.name ": jó sör, mert üt"
    } else {
        return beer.name ": nem jó"
    }
}

let dreher = {name: "Dreher", price: 349, abv:5}
let soproni = {name: "Soproni", price: 329, abv:4.5}
let borsodi = {name: "Borsodi", price: 339, abv:4.8}
let pécsi = {name: "Pécsi Sör", price: 359, abv:4.2}
logger (decideIfBeerIsGood(dreher))