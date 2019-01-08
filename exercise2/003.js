function soal3(param)
{
    var animal = {};
    param.sort();
    
    for(var i = 0; i < param.length; i++) {
        if(animal[param[i][0]] == null) {
            animal[param[i][0]] = [];
            animal[param[i][0]].push(param[i]);
        } else {
            animal[param[i][0]].push(param[i]);
        }
    }
    return animal;
}

console.log(soal3(['Ayam','Kucing','Bebek','Sapi','Babi','Curut','Cacing','Monyet']));
/*
    {
        A:['Ayam'],
        B:['Bebek','Babi'],
        C:['Cacing','Curut'],
        K:['Kucing'],
        M:['Monyet'],
        S:['Sapi']
    }
*/

console.log(soal3(['Anjing','Kuda','Anoa','Zebra','Lipan','Kudanil','Landak']));

/*
    {
        A:['Anjing','Anoa'],
        L:['Lipan','Landak'],
        K:['Kuda','Kudanil'],
        Z:['Zebra']
    }
*/