/*
    ================
    simple Trapesium
    ================
    [INSTRUCTION]
    buatlah sebuah program yg dapat membuat trapesium sederhana
    program ini hanya memiliki 1 input yaitu 
    - tinggi (t)
    Program ini memiliki 2 release. 
    yaitu : 
    [RELEASE 0]
    trapesiumRelease0(5)
    output: 
    ooooo
    oooooo
    ooooooo
    oooooooo
    ooooooooo
    [RELEASE 1]
    trapesiumRelease1(5)
    output:
    ooooo
    o    o
    o     o
    o      o
    ooooooooo
*/

function trapesiumRelease0(t) {
    var number = t;

    for(var i = 0; i < t; i++) {
        var tampung = '';
        
        for(var j = 0; j < t * 2; j++) {
            if(j < number) {
                tampung += 'o';
            } else {
                tampung += ' ';
            }
        }
        number += 1;
        console.log(tampung);
    }
}
/* 
trapesiumRelease0(5)
ooooo
oooooo
ooooooo
oooooooo
ooooooooo
*/

function trapesiumRelease1(t) {
    var number = t;

    for(var i = 0; i < t; i++) {
        var tampung = '';
        
        for(var j = 0; j < t * 2; j++) {
            if(j < number) {
                if(i == 0 || i == t - 1 || j == 0 || j == number - 1) {
                    tampung += 'o';
                } else {
                    tampung += ' ';
                }
            } else {
                tampung += ' ';
            }
        }
        number += 1;
        console.log(tampung);
    }
}

trapesiumRelease0(5)
trapesiumRelease1(5)
/*
ooooo
o    o
o     o
o      o
ooooooooo
*/