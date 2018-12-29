/*
    wajib pseudocode. 
    Jawaban pseudocode disini 
    function soal2(elementWeight)
        IF "elementWeight" == 0
            DISPLAY 'Invalid input'
        ELSE
            STORE "ascii" to 97

            FOR(assignt initial value1; initial value1 < elementWeight; increment)
                STORE "tampung" to []

                FOR(assignt initial value2; initial value2 < elementWeight; increment)
                    IF "ascii" <= 121
                        tampung.push(String.fromCharCode(ascii));
                        ascii += 1;
                    ELSE
                        tampung.push(String.fromCharCode(ascii));
                        ascii = 97;
            DISPLAY tampung
        return ''
    end function

    DISPLAY soal2(elementWeight)
    
*/

function soal2(param)
{
    if(param == 0) {
        console.log('Invalid input');
    } else {
        var ascii = 97;

        for(var i = 0; i < param; i++) {
            var tampung = [];

            for(var j = 0; j < param; j++) {
                if(ascii <= 121) {
                    tampung.push(String.fromCharCode(ascii));
                    ascii += 1;
                } else {
                    tampung.push(String.fromCharCode(ascii));
                    ascii = 97;
                }
            }
            console.log(tampung);
        }
    }
    return '';
}

console.log(soal2(8))
/*
    [
        ['a','b','c','d','e','f','g','h']
        ['i','j','k','l','m','n','o','p']
        ['q','r','s','t','u','v','w','x']
        ['y','z','a','b','c','d','e','f']
        ['g','h','i','j','k','l','m','n']
        ['o','p','q','r','s','t','u','v']
        ['w','x','y','z','a','b','c','d']
        ['e','f','g','h','i','j','k','l']
    ]
*/

console.log(soal2(2))
/*
    [
        ['a','b'],
        ['c','d']
    ]
*/

console.log(soal2(0)) // invalid input