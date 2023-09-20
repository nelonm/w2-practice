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