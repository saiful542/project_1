//problem 3
//calculating total delivery cost

function deliveryCost(delivery_amount)
{
    //error cases
    if(delivery_amount<0)
        return 'please enter positive number';
    if(typeof(delivery_amount)!='number')
        return 'please enter the correct input format';


    const first_100 = 100 , second_100 = 80 , rest = 50;
    let total,first_portion,second_portion,third_portion;
    if(delivery_amount<=100)
    {
        total = delivery_amount*first_100;
        return total;
    }
    else if(delivery_amount>100 && delivery_amount<=200)
    {
        first_portion = 100*first_100;
        second_portion = (delivery_amount-100)*second_100;
        total = first_portion + second_portion;
        return total;
    }
    else if(delivery_amount>200)
    {
        first_portion = 100*first_100;
        second_portion = 100*second_100;
        third_portion = (delivery_amount-200)*rest;
        total = first_portion + second_portion + third_portion;
        return total;

    }


}

const delivery_amount = 144;
const result = deliveryCost(delivery_amount);
console.log(result);