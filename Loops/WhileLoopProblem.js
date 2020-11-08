let toss;
let hcount = 0;
let tcount = 0;
while(hcount<11 && 
tcount<11)
{
toss = Math.floor(Math.random()*10)%2;
if(toss==0)
{
hcount++;
}
else
{
tcount++;
}
}
let winner = (hcount>tcount)?hcount:tcount;
if(winner==hcount)
console.log("Heads won");
else
console.log("Tails won");