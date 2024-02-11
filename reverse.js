function reverseString(text){
    for(let i=text.length-1; i >= 0; i--){
        const elements = text[i];
        console.log(elements);
    }
}
const myString='I am a good Boy';
const reversed = reverseString(myString);
// console.log(reversed);