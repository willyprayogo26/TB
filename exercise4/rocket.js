function rocket(param)
{
    var array = []

    for(var i = 0; i < param; i++) {
        var temp = [];

        for(var j = 0; j < param; j++) {
            if(param <= 2) {
                temp.push('*');
            } else if(i == 0 || i == param - 1 || j == 0 || j == param - 1) {
                temp.push('');
            } else {
                temp.push('*');
            }
        }
        array.push(temp);
    }
    console.log('');
    return array;
}

console.log(rocket(5))
/*
    [
        ['','','','',''],
        ['','','','',''],
        ['','','*','',''],
        ['','','','',''],
        ['','','','','']
    ]
*/

console.log(rocket(3))
/*
    [
        ['','',''],
        ['','*',''],
        ['','',''],
      
    ]
*/

console.log(rocket(4))
/*
    [
        ['','','',''],
        ['','*','*',''],
        ['','*','*',''],
        ['','','',''],
        
    ]
*/

console.log(rocket(2))
/*
    [
        ['*','*'],
        ['*','*'],
    ]
*/

console.log(rocket(1))
/*
    [
        ['*']
    ]
*/