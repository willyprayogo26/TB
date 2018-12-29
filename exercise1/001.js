function soal1(param)
{
    var temp = [];

    if(param % 2 == 0 && param != 0) {
        for(var i = 0; i < param; i++) {
            if(i == ((param / 2) - 1) || i == (param / 2)) {
                temp.push('*');
            } else {
                temp.push('');
            }
        }
        return temp;
    } else if(param % 2 == 1) {
        for(var i = 0; i < param; i++) {
            if(i == (param / 2) - 0.5) {
                temp.push('*');
            } else {
                temp.push('');
            }
        }
        return temp;
    } else {
        return 'Invalid input';
    }
}

// test case
console.log( soal1(5) ) 
/*
    output : 
    ['','','*','','']
*/

console.log( soal1(4)) // ['','*','*','']

console.log( soal1(7)) // ['','','','*','','','']

console.log( soal1(10)) // ['','','','','*','*','','','','']

console.log( soal1(0)) // invalid input 

console.log( soal1(1)) // ['*']