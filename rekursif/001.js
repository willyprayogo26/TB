/* 
    ================
    addAll recursive
    ================
    [INSTRUCTION]
    jumlahkan semua angka yang ada di array dengan menggunakan metode rekursive
    [EXAMPLE]
    addAllRecursive([1,2,3,4,5,6]) 
    output : 21
*/

function addAllRecursive(arr) {
    if(arr == []) {
        return;
    } else {
        arr.shift();
        return arr[0] + addAllRecursive(arr);
    }
}

addAllRecursive([1,2,3,4,5,6]) // 21