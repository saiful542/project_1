const products = [
    {name:'Mi nolag dsd' ,id:300,ram:16},
    {name:'ni nolag dsd' ,id:500,ram:16},
    {name:'pi poree ds ' ,id:600,ram:8},
    {name:'si reee fdsaf' ,id:100,ram:32},
    {name:'li vsv dfsd ' ,id:800,ram:8}
];
function search(product,text)
{
    let dj = [];
    for(const product of products)
    {
        const name = product.name;
        if(name.indexOf(text) != -1)
        {
            dj.push(product);
        }
    }
    return dj;

}
const answer = search(products,'dfsd');
console.log(answer);