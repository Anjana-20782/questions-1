let arr=[1,2,2,3,3,5,6,8]
let samenumber=[];

for(i=0;i<arr.length;i++){

    if(!samenumber.includes(arr[i]))
    {
        samenumber.push(arr[i])
    }
}
console.log(samenumber);
