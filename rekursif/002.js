/*
   ====================
   Palindrome Recursive
   ====================
   [INSTRUCTION]
   buatlah sebuah program untuk mendeteksi sebuah kata palindrome atau bukan 
   dengan menggunakan methode recursive
   - jika sebuah kata atau kalimat palindrome maka outputnya adalah : true
   - jika sebuah kata atau kalimat bukan palindrome maka outputnya adalah : false 
   [EXAMPLE]
   palindromeRecursive("kasur ini rusak") 
   output: true
   palindromeRecursive("nababan")
   output: true
   
   palindromeRecursive("makan")
   output: false
*/

function palindromeRecursive(str) {
   if(str.length == 1) {
      console.log(true);
   } else if(str[0] == str[str.length - 1]) {
      str = str.substring(1, str.length - 1);
      palindromeRecursive(str);
   } else {
      console.log(false);
   }
}

palindromeRecursive("kasur ini rusak") // true 

palindromeRecursive("nababan") // true

palindromeRecursive("makan") // false