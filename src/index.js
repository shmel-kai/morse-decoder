const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) { 
    const arr = expr.split("");
    const charsNumber = arr.length / 10;
    let resultString = '';

    for (let i = 0; i < charsNumber; i++) {
        const one = arr[0 + i * 10] + arr[1 + i * 10];
        const two = arr[2 + i * 10] + arr[3 + i * 10];
        const three = arr[4 + i * 10] + arr[5 + i * 10];
        const four = arr[6 + i * 10] + arr[7 + i * 10];
        const five = arr[8 + i * 10] + arr[9 + i * 10];
    
        const map = {
            '10': '.',
            '11': '-',
            '00': '',
        };
    
        const resultsString = map[one] + map[two] + map[three] + map[four] + map[five];

        if (one === '**') {
            resultString += ' ';
        } else {
            resultString += MORSE_TABLE[resultsString];
        }
    }

    return resultString;
}

module.exports = {
    decode
}