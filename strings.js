let output = document.getElementById("hit");
let buttton = document.getElementById("butt").addEventListener("click", letterOnly);
let textString = document.getElementById("textString");
let button1 = document.getElementById("butt1").addEventListener("click", clearInput);
textString.addEventListener("keyup", function(e) {

    if (e.which === 13) {
        letterOnly();
    }
});

function alphaString() {
    var newAlp = textString.value.split("");
    var revstr = reversal(newAlp);
    output.innerHTML += alphabits(newAlp);
    output.innerHTML += palindrome(revstr);
}

function reversal(arr) {
    var rev = arr.reverse().join("");
    output.innerHTML += `<p>${rev}</p>`;
    console.log("reverse", arr.reverse());
    console.log(arr.reverse().join(""));
    return rev;
}

function alphabits(arr) {
    return `<p>${arr.sort().join("")}</p>`;
}

function palindrome(revstr) {
    if (revstr == textString.value) {
        return `<p>This is a palindrome</p>`;
    } else {
        return `<p> This is not a palindrome </p>`;
    }
}

function letterOnly() {
    let letter = document.getElementById("textString").value;
    if (!letter.match(/[a-zA-Z]/)) {
        alert("Letters only");
        clearInput();
    } else {
        alphaString();
    }
}

function clearInput() {
    textString.value = "";
    output.innerHTML = "";
}
