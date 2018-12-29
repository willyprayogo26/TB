// mirip soal pasangan , namun agak beda
// 1 orang bisa ngerjain soal ini , klo dia bisa, kamu juga
function soal2(param)
{
    var temp = [];
    var kali = param.length / 2;

    if(param.length % 2 == 0) {
        for(var i = 0; i < kali; i++) {
            temp.push([param[i], param[param.length - (i + 1)]]);
        }
    } else {
        param.splice(kali + 0.5, 0, 'Instruktur');

        for(var i = 0; i < kali + 0.5; i++) {
            temp.push([param[i], param[param.length - (i + 1)]]);
        }
    }
    return temp;
}

console.log(soal2(['Aries','Dimas','Gatot',"Nurmantyo","Zainul","Majdi"]))
/*
    output: 
    [['Aries','Majdi'],['Dimas','Zainul'],['Gatot','Nurmantyo']]
*/

console.log(soal2(['A','B','C','D','E']))//
// [ ['A','E'] , ['B','D'], ['C','Instruktur']]

console.log(soal2(['Susan','Albert','Erithiana','Zaki','Sisijoan','Henry',"Nio"]))
// [['Susan','Nio'],['Albert','Henry'],['Erithiana','Sisijoan'],['Zaki','Instruktur']]