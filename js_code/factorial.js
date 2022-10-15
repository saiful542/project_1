function fact(num){
    if(num==1)
        return 1;
    return num*fact(num-1);
}

const number = 5;
console.log(fact(number));