//random number without duplicate

let main=[];
for(var i=0;i<20;i++)
{
    let ans= Math.round(Math.random()*50);
    if(main.indexOf(ans)==-1 )
        main.push(ans);
    else
        i--;
    
}
console.log(main);