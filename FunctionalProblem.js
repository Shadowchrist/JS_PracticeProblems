const args = process.argv.slice(2);
let n1= parseInt(args[0]);
let n2 = parseInt(args[1]);

function checkPalindrome(p)
{
    let x=p;
    let rev=0;
    while(Math.floor(x)>0)
    {
        let d=x%10;
        rev=rev*10+d;
        x=x/10;
    }
    if(rev==p)
        return true;
    else
        return false;
}   
    if(checkPalindrome(n1)&&checkPalindrome(n2)==true)
        console.log("The 2 numbers are palindromes");
    else
        console.log("The 2 numbers are not palindromes");
