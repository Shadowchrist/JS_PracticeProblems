const args = process.argv.slice(2);
let number = parseInt(args[0]);
let count=0;

for(let i=2;i<=Math.sqrt(number);i++)
{
    if(number%i==0)
    count++;
}

if(count>=1 || number==1)
console.log("Not prime");
else
console.log("Prime");