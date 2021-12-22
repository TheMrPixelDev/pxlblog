var alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

function shift(char, key){
    if(alphabet.includes(char)){
        var totalLength = alphabet.indexOf(char) + key;
        if(totalLength >= alphabet.length) {
            return alphabet[totalLength - alphabet.length]
        }else{
            return alphabet[totalLength]
        }
    }else{
        return char
    }
}

function code(){

    var inText = document.getElementById("textIn").value.toUpperCase().split("");
    var key = parseInt(document.getElementById("keyIn").value);
    var outText = "";

    if(inText.length == 0) {
        alert("Gib einen Text zum entschlüsseln ein.")
    }else if(key == undefined){
        alert("Gib einen Schlüssel an.")
    }else{
        inText.forEach(element => {
            outText = outText + shift(element, key);
        });
    
        document.getElementById("textOut").value = outText;    
    }
}