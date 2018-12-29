function soal3(param)
{
    var tampung = {};
    tampung["under20"] = [];
    tampung["over20"] = [];

    for(var i = 0; i < param.length; i++) {
        if(param[i][1] < 20) {
            tampung.under20.push(param[i][0]);
        } else {
            tampung.over20.push(param[i][0]);
        }
    }
    return tampung;
}

console.log(soal3([
    ["dimas",17],
    ["akbar",28],
    ["rifki",30],
    ["dimitri",18],
    ["saitama",19]
]));

/*
    {
        under20:["dimas",'dimitri','saitama'],
        over20:["akbar","rifki"]
    }
*/