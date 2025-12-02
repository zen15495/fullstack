function censorWord(sentence, wordTOCensor) {
    const regex = new RegExp(wordTOCensor, 'gi');
    const censoredText = sentence.replace(regex, '***');
    return censoredText
}
const originalpost = "JavaScript is fun, but sometimes javascript can be tricky."
const cleanpost = censorWord(originalpost, "javascript")
console.log(cleanpost); 