function soal3(param1)
{
    var tampung = [];
    var number = 0;
    
    for(var i = 0; i < param1; i++) {
        var temp = [];

        for(var j = 0; j < param1; j++) {
            number += 1;
            if(i % 2 == 0) {
                temp.push(number);
            } else {
                temp.unshift(number);
            }
        }
        tampung.push(temp);
    }
    return tampung;
}

console.log(soal3(3))
/*
    [
        [1,2,3],
        [6,5,4],
        [7,8,9]
    ]
*/

console.log(soal3(2))
/*
    [
        [1,2],
        [4,3]
    ]
*/

console.log(soal3(4))
/*
    [
        [1,2,3,4],
        [8,7,6,5],
        [9,10,11,12],
        [16,15,15,13]
    ]
*/