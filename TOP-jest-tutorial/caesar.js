Number.prototype.mod = function (n) {
    return ((this % n) + n) % n;
  };

function caesar (string, shift) {
    let res = "";
    const regex = /^[a-zA-Z]+$/
    for (let i = 0; i < string.length; i++){
        if (string.charAt(i).match(regex)){
            res += String.fromCharCode((string.charAt(i).toLowerCase().charCodeAt(0) + shift - 97).mod(26) + 97);
        } else {
            res += string.charAt(i)
        }
    }
    return res;
};

module.exports = caesar;