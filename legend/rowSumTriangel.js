/* 
    ================
    Row Sum Triangle
    ================
    [INSTRUCTION]
    diberikan sebuah segitiga yang berisi angka - angka ganjil 
    1 
    3 5 
    7 9 11
    13 15 17 19
    21 23 25 27 29
    31 33 35 37 39 41
    ...
    tugas kalian adalah dapat mengetahui jumlah angka per baris bila 
    baris nya disebutkan.
    [EXAMPLE]
    rowSumTriangle(4)
    dibaris 4 terdapat angka :
    13 + 15 + 17 + 19 = 64
    output: 64 
    rowSumTriangle(27)
    output : 19683
*/

function rowSumTriangle(row) {
    var number = 0;
    var jumlah = 0;

    for(var i = 0; i < row; i++) {
        var temp = [];

        for(var j = 0; j < i + 1; j++) {
            if(number % 2 == 0) {
                number += 1;
            } else {
                number += 2;
            }
            temp.push(number);
        }
    }

    for(var k = 0; k < temp.length; k++) {
        jumlah += temp[k];
    }
    console.log(jumlah);
}

rowSumTriangle(4) // 64

rowSumTriangle(27) // 19683