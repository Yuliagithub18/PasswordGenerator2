function userOptions() {
    var numberOfChar = prompt("How many characters would you like your password to contain?")
    if (numberOfChar < 8 || numberOfChar > 128 ) {
        alert("Password should be between 8 and 128");
return;
    }
    var specialChar = confirm("Click OK to confirm including special characters");
    var numeric = confirm("Click OK to confirm including numeric characters");
    var lowerCase = confirm("Click OK to confirm including lowercase characters");
    var upperCase = confirm("Click OK to confirm including uppercase characters");

}

var numberOfChar = "ABCDFddjjfideie13467#$$#@@-";
var special = "!@#$%^&*()_+!@?:!@#$^";
var numbers = "1234567890";
var lower = "aswsjhdnjfhrghhrgggtgt";
var upper = "ASDWWQEYUHHJKIHRFEIIUARM";


function generate() {
    var requirements = {
        special: specialChar,
    }
    var inputbox = document.getElementById("password");
    var result = "";
    for (var i = 0; i < 10; i++) {
        var chars = "Abcdefg1234567890!@Bootcampisawesome++";
        var random = Math.floor(Math.random() * 40);
        result += chars.charAt(random);
    }
    alert(result);
}
function copyPassword() {
    document.getElementById("display").select();
    document.execCommand("Copy");
    alert("Password copied to clipboard");
}


