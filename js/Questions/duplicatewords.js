let str="Bannana"
str = str.toLowerCase(); 
let count={}
for(i=0;i<str.length;i++)
{
    let letter=str[i]
    if(count[letter])
    {
        count[letter]++
    }
    else
    {
        count[letter]=1
        
    }
}

for (let key in count) {
  console.log(key + " = " + count[key]);
}