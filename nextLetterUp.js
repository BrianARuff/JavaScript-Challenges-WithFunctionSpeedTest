function replacedString(str){
var newString = '';
for (var i = 0; i < str.length; i++) {
    console.log(str.charCodeAt(i))
    if (96 < str.charCodeAt(i) && str.charCodeAt(i) < 123) {
        newString += String.fromCharCode(str.charCodeAt(i) + 1);
    }
 }
 return newString;
}

replacedString('abc') // bcd
