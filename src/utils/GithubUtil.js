// Caesar Cipher
function caesarEncrypt(str, shift) {
    shift = Math.floor(shift);
    return str.split('').map(char => {
        let code = char.charCodeAt(0);
        if (code >= 65 && code <= 90) {
            return String.fromCharCode(((code - 65 + shift) % 26) + 65);
        } else if (code >= 97 && code <= 122) {
            return String.fromCharCode(((code - 97 + shift) % 26) + 97);
        }
        return char;
    }).join('');
}

// Caesar Cipher
export function caesarDecrypt(str, shift) {
    return caesarEncrypt(str, (26 - shift) % 26);
}
