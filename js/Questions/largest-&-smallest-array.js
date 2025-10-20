let arr=[2,3,4,5,6,7,8]

let larnumber=arr[0];
let smallnumber=arr[0];

for(i=0;i<arr.length;i++){

if(arr[i]<smallnumber){

    arr[i]=smallnumber
}
 if(arr[i]>larnumber){

    larnumber=arr[i]

}
}
console.log(smallnumber);
console.log(larnumber);

