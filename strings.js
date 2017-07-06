// The text input should only accept letters. No numbers.
// Implement the logic in the reversal function that reverses the order of the characters in the string, and outputs the result in the DOM, below the text input.
// Implement the logic in the alphabits function that return the characters in alphabetical order, and outputs the result in the DOM, below the text input.
// Implement the logic in the palindrome function that determine whether the string is a palindrome. If it is, display the text "Your string is a palidrome" in the DOM, below the text input.
// When the user presses the enter key in the text input, or clicks the button, set the value of the testString variable (see below) to the value of the input.
// The output of each of the functions should immediately appear as well.

// event listener to listen for a click and call the function alphaString

var output = document.getElementById("hit");
var buttton = document.getElementById("butt").addEventListener("click", alphaString);
var textString = document.getElementById("textString");
textString.addEventListener("keyup", function(e) {

    if (e.which === 13) {
        alphaString();
    }
    // console.log("enter",);


});
// 


function alphaString() {
    var newAlp = textString.value.split("");
    var revstr = reversal(newAlp);
    palindrome(newAlp);
    output.innerHTML += alphabits(newAlp);
    output.innerHTML += palindrome(newAlp, revstr);



}

function reversal(str) {
    var rev = str.reverse().join("");
    output.innerHTML += `<p>${rev}</p>`;
    console.log(str.reverse().join(""));

    return rev;
}

function alphabits(str) {
    return `<p>${str.sort().join("")}</p>`;



}


function palindrome(str, revstr) {

    if (revstr === textString.value) {
        return `<p>This is a palindrome</p>`;
    } else {
        return `<p> This is not a palindrome </p>`;
    }




}
// var testString = alphaString;
// reversal(testString);
// alphabits(testString);
// palindrome(testString);
