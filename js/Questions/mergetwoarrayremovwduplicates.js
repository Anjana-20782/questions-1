let arr1=[1,2,2,3,4,5]
let arr2=[5,6,7,8,9]

let merge=[];

for(i=0;i<arr1.length;i++){

    merge.push(arr1[i])
}
for(i=0;i<arr2.length;i++){

    merge.push(arr2[i])
}

let duplicate=[];

for(i=0;i<merge.length;i++){

    if(!duplicate.includes(merge[i])){

        duplicate.push(merge[i])
    }
}

console.log(duplicate);
