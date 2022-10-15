// declare a variable
var variablename_0 = 12;
var variablename_1 = 10;
var variablename_2 = 'string';
var variablename_3 = ' name';
var variablename_5 = '200';
var variablename_6 = 7.2564;
console.log(variablename_2);   //displaying result

// mathemetical operation
console.log(variablename_2 + variablename_3);//variablename_2 +=3
console.log(variablename_0 + variablename_1);
console.log(variablename_0 - variablename_1);
console.log(variablename_0 * variablename_1);
console.log(variablename_0 / variablename_1);
console.log(variablename_0 % variablename_1);

// Boolean

var name_1 = true;
console.log(name_1);

// variable type

console.log(typeof(variablename_1));

// converting into integer
console.log(parseInt(variablename_5));

// converting into float
console.log(parseFloat(variablename_1));

// fixed float value after point

console.log(variablename_6.toFixed(3));

// declaring array
var array = [1,2,3];
var array_1 = ['rohim', 'korim', 'shojol'];
console.log(array_1);

// array position/index
console.log(array_1.indexOf('shojol'));

// array length
console.log(array_1.length)

// printing the nth index element.....console.log(array_1[n]);
console.log(array_1[1]);

// changing nth index element ........array_1[n]='name'
array_1[1]='fatema';
console.log(array_1[1]);

// Add or remove last element from array using push, pop
array.push(...);
array.pop(...)

// Add or remove first element from array using push, pop
array.shift();
array.unshift();

// compareing
console.log(5>6);
console.log(5<6);
console.log(5==6);
console.log(5>=6);
console.log(5<=6);
console.log(5!=6);
console.log(somthing && anotherthing);
console.log(somthing || anotherthing);

// condition
if(condition){

}
else{
    
}
// multiple condition

if(condition){

}
else if(condition){

}
else if(condition){

}
else{
    
}
// nested condition
if(condition){
    if(condition)
    {

    }
    else{

    }

}
else{
    if(condiotion){

    }
    else{

    }

}

// while Loop
var i=0;
while(i!=8){
    something;
    ... ...

    i++;
}


// for Loop
for(i=0;i<=12;i++)
{
    something;
}

// declare function
function startfan(params) {
    somthing...
    ... ... ...
    
}
// calling function
    
startfan();

// multiple parameters function
function startfan(something,something) {
    somthing...
    ... ... ...

    return answer;
    
}
// calling function
    
startfan(something,something);


// object,properties... ... ... 
// object,properties... ... ... 
// object,properties... ... ... 

var mobile{               // object.
    brand : 'samsung',   //properties
    price : 100,
    ram : '8gb',
    rom : '128gb'       //properties

};
//calling all properties at a time by calling object
console.log(mobile)


// calling properties... ...3 ways to do
console.log(mobile.ram);
console.log(mobile['ram']);
var lol='ram';
console.log(mobile[lol]);


// settilng value of properties... ...3 ways to do
mobile.brand='redmi';
mobile['brand'] = 'redmi';
var pop='brand';
console.log(mobile[pop]) = 'redmi';

//switch
//switch
//switch

var color = 'blue';
switch(color){
    case 'red':
        console.log('i am red');
        break;
    case 'yellow':
        console.log('i am yellow');
        break;
    case 'blue':
        console.log('i am blue');
        break;
    default:
        console.log('color didnt find');
}

// loop break continue
var i=0;
for(i=0;i<10;i++){
    if(i>4)
    {
        continue;
    }
    //if continue for the matched condition rest of the program
    //after continue wont run...it will run the loop from the 
    //begining again.
    
    //here the output will be 0,1,2,3,4
    console.log(i);
}

// variable declare let and const

let id=23;    //it means id can change anytime

const id=23     //it means id can not change ,its a constant

//math related 
Math.abs(-2)        //will convert any number into positive
Math.ceil(2.33)     //will convert the number into upper level int...here ans will be 3  
Math.floor(2.33)    //will convert the number into lower level int...here ans will be 2
Math.round(3.5)      //will convert the number in a round figure... here it will be 4
                    //   Math.round(3.0-1.49) = 3.....Math.round(3.5-3.99) =4

Math.random()*n     //generates a random number till n 
Math.max(3,6,3,6,8,1);

//swapping
let first = 3;
let second = 8;
let temp;
temp=first;
first=second;
second=first;

[first,second]=[second,first]//// short cut



