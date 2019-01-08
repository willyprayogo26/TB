function soal3(param)
{
    var animal = {};

    /*
    for(var i = 0; i < param.length; i++) {
        if(animal[param[i].charAt(0)] == null) {
            animal[param[i].charAt(0)] = [];
            animal.param[i].charAt(0).push(param[i]);
        } else {
            animal.param[i].charAt(0).push(param[i]);
        }
    }
    return animal;
}
    */
    
    animal["A"] = [];
    animal["B"] = [];
    animal["C"] = [];
    animal["K"] = [];
    animal["L"] = [];
    animal["M"] = [];
    animal["S"] = [];
    animal["Z"] = [];

    for(var i = 0; i < param.length; i++) {
        if(param[i].charAt(0) == 'A') {
            animal.A.push(param[i]);
        } else if(param[i].charAt(0) == 'B') {
            animal.B.push(param[i]);
        } else if(param[i].charAt(0) == 'C') {
            animal.C.push(param[i]);
        } else if(param[i].charAt(0) == 'K') {
            animal.K.push(param[i]);
        } else if(param[i].charAt(0) == 'L') {
            animal.L.push(param[i]);
        } else if(param[i].charAt(0) == 'M') {
            animal.M.push(param[i]);
        } else if(param[i].charAt(0) == 'S') {
            animal.S.push(param[i]);
        } else if(param[i].charAt(0) == 'Z') {
            animal.Z.push(param[i]);
        }
    }

    if(animal["A"].length == 0) {
        delete animal["A"];
    }
    if(animal["B"].length == 0) {
        delete animal["B"];
    }
    if(animal["C"].length == 0) {
        delete animal["C"];
    }
    if(animal["K"].length == 0) {
        delete animal["K"];
    }
    if(animal["L"].length == 0) {
        delete animal["L"];
    }
    if(animal["M"].length == 0) {
        delete animal["M"];
    }
    if(animal["S"].length == 0) {
        delete animal["S"];
    }
    if(animal["Z"].length == 0) {
        delete animal["Z"];
    }
    console.log('');
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