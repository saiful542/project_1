function a(){
    let counter=0;
    return function (){
        counter++;
        return counter;
    }
}
const call = a()
console.log(call)