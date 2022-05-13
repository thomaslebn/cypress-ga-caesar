/**
 * Please write a function which perform the Caesar Cypher
 * Helper: https://www.w3schools.com/charsets/ref_html_ascii.asp
 * --
 *
 * Example caesar('ab cd'); It returns 'bc de'
 *
 * For more information about the Caesar cypher:
 * https://fr.wikipedia.org/wiki/Chiffrement_par_décalage
 *
 *
 */

function caesar(str, key = 1) {
    let result = '';

    for (let i = 0; i < str.length; i++) {

        let currentChar = str.charCodeAt(i);

        // Case: lowercase
        if (currentChar >= 97 && currentChar <= 122) {
            if ((currentChar + key) > 122)
                result += String.fromCharCode(97 + ((currentChar + key) - 123));
            else
                result += String.fromCharCode(currentChar + key);

            continue;
        }

        // Case: uppercase
        if (currentChar >= 65 && currentChar <= 90) {
            if ((currentChar + key) > 90)
                result += String.fromCharCode(65 + ((currentChar + key) - 91));
            else
                result += String.fromCharCode(currentChar + key);

            continue;
        }

        // Others
        result += String.fromCharCode(currentChar);
    }

    return result;
}

document.querySelector('button[type="button"]')
    .addEventListener('click', () => {
        let str = document.querySelector('textarea').value;
        let key = parseInt(document.querySelector('input[type="number"]').value);
        let result = caesar(str, key);
        document.querySelector('#result').innerHTML = result;
    });
