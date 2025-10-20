let arr = [0, 1, false, " ", null, 6];

let numbers = [];

for (let i = 0; i < arr.length; i++) {
  
    if (arr[i]) {           
    
        numbers.push(arr[i]); 
  }
}

console.log(numbers); 

