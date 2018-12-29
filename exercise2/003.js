function soal3(param)
{
    var animal = {};

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
    // for(var i = 0; i < param.length; i++) {
    //     first_alpha = param[i].charAt(0);
    //     animal["" + first_alpha] = [];
    //     animal.first_alpha.push(param[i]);
    // }
    // console.log(animal);

    /*
    var tampungA = [];
    var tampungB = [];
    var tampungC = [];
    var tampungK = [];
    var tampungL = [];
    var tampungM = [];
    var tampungS = [];
    var tampungZ = [];

    for(var i = 0; i < param.length; i++) {
        if(param[i].charAt(0) == 'A') {
            tampungA.push(param[i]);
        } else if(param[i].charAt(0) == 'B') {
            tampungB.push(param[i]);
        } else if(param[i].charAt(0) == 'C') {
            tampungC.push(param[i]);
        } else if(param[i].charAt(0) == 'K') {
            tampungK.push(param[i]);
        } else if(param[i].charAt(0) == 'L') {
            tampungL.push(param[i]);
        } else if(param[i].charAt(0) == 'M') {
            tampungM.push(param[i]);
        } else if(param[i].charAt(0) == 'S') {
            tampungS.push(param[i]);
        } else if(param[i].charAt(0) == 'Z') {
            tampungZ.push(param[i]);
        }
    }
    
    if(tampungA.length != 0) {
        console.log('A:' + tampungA);
    }
    if(tampungB.length != 0) {
        console.log('B:' + tampungB);
    }
    if(tampungC.length != 0) {
        console.log('C:' + tampungC);
    }
    if(tampungK.length != 0) {
        console.log('K:' + tampungK);
    }
    if(tampungL.length != 0) {
        console.log('L:' + tampungL);
    }
    if(tampungM.length != 0) {
        console.log('M:' + tampungM);
    }
    if(tampungS.length != 0) {
        console.log('S:' + tampungS);
    }
    if(tampungZ.length != 0) {
        console.log('Z:' + tampungZ);
    }
    console.log('');
    */
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