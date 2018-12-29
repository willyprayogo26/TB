function soal2(param)
{
    if(param.length <= 2) {
        console.log('Invalid input');
    } else {
        if(param[(param.length - 1) / 2] == '') {
            param.splice(((param.length - 1) / 2), 1, param[0] * param[param.length - 1]);
            console.log(param);
        } else if(param.length % 2 == 0) {
            param.splice(((param.length / 2) - 1), 2, param[0] * param[param.length - 1], param[0] * param[param.length - 1]);
            console.log(param);
        } else {
            console.log(param);
        }
    }
    return '';
}

console.log(soal2([34,'','','',40]))
// [34,''1360,'',40]

console.log(soal2([1,2,3,4,5]))
// [1,2,5,4,5]

console.log(soal2([20,'','','','','','',30]))
// [20,'','',600,600,'','',30])

console.log(soal2([6,'','','','','',9]))
// [6,'','',54,'','',9]

console.log(soal2([1,2])) // invalid input 
console.log(soal2([1])) // invalid input 
console.log(soal2([])) // invalid input 