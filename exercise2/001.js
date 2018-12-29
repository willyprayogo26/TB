/*
    analisa sendiri dengan apa yang diminta soal melalui test case. 
    wajib menggunakan pseudocode
    PSEUDOCODE HERE : 

    function soal1(elementWeight)
        STORE "temp" to []

        IF "elementWeight" == 0
            return 'Invalid input'
        ELSE
            FOR(assignt initial value; initial value < elementWeight; increment)
                IF temp[temp.length - 1] == '!'
                    temp.push('@')
                ELSE IF temp[temp.length - 1] ==  '@'
                    temp.push('#')
                ELSE
                    temp.push('!')
            return temp
    end function

    DISPLAY soal1(elementWeight)
*/
function soal1(param)
{
    var temp = [];

    if(param == 0) {
        return 'Invalid input';
    } else {
        for(var i = 0; i < param; i++) {
            if(temp[temp.length - 1] == '!') {
                temp.push('@');
            } else if(temp[temp.length - 1] == '@') {
                temp.push('#');
            } else {
                temp.push('!');
            }
        }
        return temp;
    }
}

console.log(soal1(3))
// output : ['!','@','#']

console.log(soal1(6));
// output : ['!','@','#','!','@','#']

console.log(soal1(4))
// output : ['!','@','#','!']

console.log(soal1(0)) // invalid input