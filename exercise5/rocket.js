function rocket(param)
{
    var tampung = [];

    for(var i = 0; i < param; i++) {
        var temp = [];

        for(var j = 0; j < param; j++) {
            temp.push([i,j]);
        }
        tampung.push(temp);
    }
    return tampung;
}

console.log(rocket(3))

/*
    [
        [[0,0],[0,1],[0,2]],
        [[1,0],[1,1],[1,2]],
        [[2,0],[2,1],[2,2]]
    ]
*/