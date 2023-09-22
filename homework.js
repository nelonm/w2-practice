function text (words){
    console.log(words)
}

function attributive (x, y) {
    let words = ""
    words = x + " " + y

    return words
}

attributive ("zöld", "alma")

text (attributive ("zöld", "alma"))

// other one

function answer ( number) {
    console.log(number)
}

function squaring (z) {
    let result = 0;
    result = z*z;
    return result
}

squaring (124)

answer (squaring (124))


// homework Wednesday

let myArray = ["blue", "red", "green", "yellow"]

let myObject = {
    color: "blue",
    shape: "round",
    weight: "0,5 kg"
}

console.log (myArray[3])
console.log(myObject.shape)

let myMusic = {
    "favorite": "pop",
    other: ["irish", "classical", "instrumental"],
    singer: {
        name: "Taylor Swift",
        cd: ["Red", "1989", "Fearless", "Folklore"],
        songs: [
            {
                title: "22", 
                album: "1989"
            },
            {
                title: "Betty",
                album: "Folklore"
            },
            {
                title: "All too well",
                album: "Red"
            }
        ]
    },
    band: {
        name: "Onerepublic",
        albums: ["Dreaming out loud", "Native"],
        songs: ["Apologize", "Angel of Mercy", "Come home", "Lose myself"]
    }
}

console.log (myMusic.other[2])
console.log(myMusic.singer.songs[0].title)