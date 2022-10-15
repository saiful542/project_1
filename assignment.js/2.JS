//problem 2
//calculate the total amount of sales

function totalSales(shirt_quantity,pant_quantity,shoe_quantity)
{
    //error cases
    if(shirt_quantity<0 || pant_quantity<0 || shoe_quantity<0)
        return 'please enter the right quantity';

    if(typeof(shirt_quantity)!='number' || typeof(pant_quantity)!='number' || typeof(shoe_quantity)!='number')
        return 'please enter the correct input format';


    const shirt_price = 100, pant_price = 200, shoe_price = 500;
    let shirt,pant,shoe;
    shirt = shirt_quantity*shirt_price;
    pant = pant_quantity*pant_price;
    shoe = shoe_quantity*shoe_price;
    const total = shirt + pant + shoe;

    return total;

}

const shirt_quantity = 2, pant_quantity = 3, shoe_quantity = 2;
const result = totalSales(shirt_quantity,pant_quantity,shoe_quantity);
console.log(result);