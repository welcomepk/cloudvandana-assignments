
function splitSentance(sentence) {
    let words = [];
    let currentWord = ''

    for (let i = 0; i < sentence.length; i++) {
        let char = sentence[i]

        if (char !== ' ') {
            currentWord += char;
        } else {
            words.push(currentWord);
            currentWord = ''
        }

        if (i === sentence.length - 1) {
            words.push(currentWord);
        }
    }
    return words
}

function reverseWord(word) {

    let reversedWord = '';
    for (let j = word.length - 1; j >= 0; j--) {
        reversedWord += word[j];
    }
    return reversedWord
}



function reverseWords(sentance) {
    const words = splitSentance(sentance)
    const reversed = []

    words.forEach(word => {
        reversed.push(reverseWord(word))
    });

    return reversed.join(' ')
}

let inputSentence = "This is a sunny day"
const reversedSentance = reverseWords(inputSentence)
console.log("after reversing the each word => ", reversedSentance);