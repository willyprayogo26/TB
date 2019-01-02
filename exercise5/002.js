function soal2(param)
{
    if(param % 2 == 1) {
        var tampung = [];
        var number = 0;

        for(var i = 0; i < Math.round(param / 2); i++) {
            var temp = [];

            for(var j = 0; j < param; j++) {
                if(j >= parseInt(param / 2) - number && j <= parseInt(param / 2) + number) {
                    temp.push('*');
                } else {
                    temp.push('');
                }
            }
            number += 1;
            tampung.push(temp);
        }
        return tampung;
    } else {
        return 'Invalid input';
    }
    
}

console.log(soal2(5))
/*
  [
      ['','','*','',''],
      ['','*','*','*',''],
      ['*','*','*','*','*']
  ]
*/

console.log(soal2(3))
/*
  [
      ['','*',''],
      ['*','*','*']
  ]
*/

console.log(soal2(4)) // invalid input
console.log(soal2(2)) // invalid input
console.log(soal2(6)) // invalid input