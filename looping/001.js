/*
    ============
    Generate Bar 
    ============
    Buatlah Program untuk mengenerate Bar ( persegi Panjang ) berdasarkan 
    - p => panjang 
    - t => tinggi 
*/

function generateBar(p,t) {
    if(p < t) {
        console.log('panjang harus lebih besar daripada tinggi');
    } else {
        for(var i = 0; i < t; i ++) {
            var tampung = '';
    
            for(var j = 0; j < p; j++) {
                if(i == 0 || j == 0 || i == t - 1 || j == p - 1) {
                    tampung += 'o';
                } else {
                    tampung+= ' ';
                }
            }
            console.log(tampung);
        }
    }
}

generateBar(4,3)//
/*
    oooo
    o  o
    oooo
*/

generateBar(10,4) // 
/*
    oooooooooo
    o        o
    o        o
    oooooooooo
*/

generateBar(4,5) // panjang harus lebih besar daripada tinggi