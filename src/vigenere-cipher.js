const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
    constructor(direct = true) {
        this.direct = direct;
        // this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        // this.square = [];
    }

    encrypt(message, key) {
        if (!message || !key){
            throw new Error();
        }

        let encryptMessage = message.toUpperCase().split('');
        key = key.toUpperCase();
        let keyIndex = 0;
        for (let i = 0; i < encryptMessage.length; i += 1) {
            if (encryptMessage[i].charCodeAt(0) < 65 || encryptMessage[i].charCodeAt(0) > 90) {
                continue;
            }
            let newCode = encryptMessage[i].charCodeAt(0) + key[keyIndex].charCodeAt(0) - 65;
            if (newCode > 90) newCode -= 26;
            encryptMessage[i] = String.fromCharCode(newCode);
            if (keyIndex >= key.length -1) {
                keyIndex = 0;
            } else
                keyIndex++;
        }
        if (this.direct) {
            return encryptMessage.join('');
        } else
            return encryptMessage.reverse().join('');
    }

    decrypt(message, key) {
        if (!message || !key){
            throw new Error();
        }

        let encryptMessage = message.split('');
        key = key.toUpperCase();
        let keyIndex = 0;
        for (let i = 0; i < encryptMessage.length; i += 1) {
            if (encryptMessage[i].charCodeAt(0) < 65 || encryptMessage[i].charCodeAt(0) > 90) {
                continue;
            }
            let newCode = encryptMessage[i].charCodeAt(0) - key[keyIndex].charCodeAt(0) + 65;
            if (newCode < 65) newCode += 26;
            encryptMessage[i] = String.fromCharCode(newCode);
            if (keyIndex >= key.length -1) {
                keyIndex = 0;
            } else
                keyIndex++;
        }
        if (this.direct) {
            return encryptMessage.join('');
        } else
            return encryptMessage.reverse().join('');
    }
}

module.exports = VigenereCipheringMachine;


//   // Генерируем квадрат Виженера
//   generateSquare() {
//       for (let i = 0; i < this.alphabet.length; i++) {
//           let row = this.alphabet.slice(i);
//           row += this.alphabet.slice(0, i);
//           this.square.push(row);
//       }
//   }
//   getSquare() {
//       return this.square;
//   }
//
// encrypt(message, key) {
//     if (!message || !key){
//       throw new Error;
//     }
//     message = message.toUpperCase().split('');
//     key = key.toUpperCase();
//     let encryptMessage = "";
//     // Дублируем ключ до длины сообщения
//     let newKey='';
//     while (key.length < message.length) {
//       key += key;
//   }
//     newKey = key.substr(0, message.length);
//
//     // Генерируем квадрат Виженера
//     this.generateSquare();
//     for (let it = 0; it < message.length; it++) {
//         // Индекс строки раный символу сообщения
//         if (this.alphabet.includes(message[it])){
//             let i = this.alphabet.indexOf(message[it]);
//             // Индекс колонки раный символу ключа
//             let j = this.alphabet.indexOf(newKey[it]);
//             // Зашифрованный символ равный пересечению индекса строки и колонки
//             encryptMessage += this.square[i][j];
//         } else
//             encryptMessage += message[it];
//     }
//     if (this.reverse) {
//         return encryptMessage.split("").reverse().join("");
//     }
// }
//
// decrypt(message, key) {
//     if (!message || !key){
//         throw new Error;
//     }
//     message = message.toUpperCase().split('');
//     key = key.toUpperCase();
//     let decryptMessage = "";
//     let newKey ='';
//     while (key.length < message.length) {
//         key += key;
//     }
//     newKey = key.substr(0, message.length);
//
//     this.generateSquare();
//     for (let it = 0; it < message.length; it++) {
//         if (this.alphabet.includes(message[it])) {
//             // Берем символ ключа и ищем индекс строки с данным символом
//             let i = this.alphabet.indexOf(newKey[it]);
//             let j = this.square[i].indexOf(message[it]);
//             decryptMessage += this.alphabet[j];
//         } else
//             decryptMessage +=newKey[it];
//     }
//         if (this.reverse) {
//             return decryptMessage.split("").reverse().join("");
//         }
//     }
// }



