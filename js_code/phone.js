//21-7 Find the cheapest phone from an array of phone objects


function calculate(phones)
{
    let maxstorage = phones[0];
    for(const phone of phones)
    {
        if( phone.storage>maxstorage.storage)
            maxstorage= phone ;
    }
    return maxstorage;

}
const phones=[
    {name:'mi' ,storage: 32 ,price:12000},
    {name:'samsu' ,storage: 16 ,price:13000},
    {name:'noki' ,storage: 128 ,price:14000},
    {name:'oppa' ,storage: 8 ,price:11000},
];
console.log(calculate(phones));