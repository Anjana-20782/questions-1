let str = "anjana45g";
let numbers = str.replace(/\D/g, ""); 
console.log(numbers);                               // 45

                    //OR




let string = "anjana45g";
let number = "";

for (let i = 0; i < string.length; i++) {
  if (!isNaN(string[i]) && string[i] !== " ") {          // 45
    number += string[i];
  }
}









