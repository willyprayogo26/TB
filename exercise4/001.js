function soal1(param)
{
    var tampung = [];

    for(var i = 0; i < param; i++) {
        if((i + 1) % 4 == 0) {
            tampung.push('Fizz');
        } else if((i + 1) % 7 == 0) {
            tampung.push('Buzz');
        } else {
            tampung.push('');
        }
    }
    return tampung;
}

console.log(soal1(20))
// ['','','','Fizz','','','Buzz','Fizz','','','','Fizz','','Buzz','','Fizz','','','','Fizz']

console.log(soal1(10))
// ['','','','Fizz','','','Buzz','Fizz','','']

console.log(soal1(30))
// ['','','','Fizz','','','Buzz','Fizz','','','','Fizz','','Buzz','','Fizz','','','','Fizz','Buzz','','','Fizz','','','','FizzBuzz','','']