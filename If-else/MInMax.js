let a = Math.floor(Math.random() * 1000);
let b = Math.floor(Math.random() * 1000);
let c = Math.floor(Math.random() * 1000);
let min=0;
let max=0;
console.log(a+" "+b+" "+c);
if(a>b)
{
    if(a>c)
    {
        max = a;
        if(c>b)
        min = b;
        else
        min = c;
    }
    else
    {
        max = c;
        if(c>b)
        min = b;
        else
        min = c;
    }
}
else
{
    if(b>c)
    {
        max = b;
        if(c>a)
        min = a;
        else
        min = c;
    }
    else
    {
        max = c;
        if(b>a)
        min = a;
        else
        min = b;
    }
}
console.log("Max = "+max+" min = "+min);