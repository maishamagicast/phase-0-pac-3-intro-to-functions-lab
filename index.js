function shout(string){
    return string.toUpperCase()
}

function whisper(string){
    return string.toLowerCase()
}

function logShout(string){
    console.log(string.toUpperCase())
}

function logWhisper(string){
    console.log(string.toLowerCase())
}

function sayHiToHeadphonedRoommate(string){
    if (string === string.toLowerCase()) 
        return "I can\'t hear you!" 
    else if (string === string.toUpperCase()) 
        return "YES INDEED!"
    else if (string === "Let's have dinner together!")
        return "I would love to!"
}

console.log(sayHiToHeadphonedRoommate("hello")); // "I can't hear you!"
console.log(sayHiToHeadphonedRoommate("HELLO")); // "YES INDEED!"
console.log(sayHiToHeadphonedRoommate("Let's have dinner together!")); // "I would love to!"
console.log(sayHiToHeadphonedRoommate("Hi there")); // undefined