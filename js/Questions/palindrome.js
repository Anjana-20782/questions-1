let str="ardra";
// let rev=""
// for(i=str.length-1;i>=0;i--)
// {
//      rev += str[i];
// }
// if(rev==str){

//     console.log(str+" is palidrome");
    
// }
// else{
//     console.log(str+" not palidrome");
    
// }

                //OR
                
let rev=str.split(" ").reverse().join(" ")
 if(rev==str){

     console.log(str+" is palidrome");
    
 }
 else{
     console.log(str+" not palidrome");
    
 }