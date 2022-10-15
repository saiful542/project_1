//0 1 1 2 3 5 8 13 21......fibonacci series


//fibonacci series using brute force
// var n,i,j;
// n=10;
// var first=0,second=1;
// for(i=0;i<n;i++)
// {
//     var fib=first+second;
//     console.log(fib);
//     first=second;
//     second=fib;
// }


//fibonacci using normal array
// let i,n;
// n=8;
// let fib=[0,1];
// for(i=2;i<n;i++)
// {
//     fib[i]=fib[i-1]+fib[i-2];
// }
// console.log(fib);


//fibonacci number by brute force function
// function fibo(num){

//         if(num == 0)
//         return 0;
//         if(num==1)
//         return 1;
//     else if(num>1)
//     {
//         return fibo(num-1)+fibo(num-2);
//     }
    
// }
// console.log(fibo(6));



//fibonacci series by array function
function fibo(num){

        if(num == 0)
            return [0];

        if(num==1)
            return [0,1];

        if(num>1)
        {
            var fib=fibo(num-1);
            fib[num]= fib[num-1]+fib[num-2];
            return fib;
            
        }
     
    
}
console.log(fibo(6));



