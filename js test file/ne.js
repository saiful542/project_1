const delay = ()=>{
  const items=checkCart();
  for(const item in items){
   display(item)
  } 
}
const addItem = () =>{
   const inputText=document.getElementById('input');
   const inputValue=inputText.value;
   if(!inputValue)
       return;
   display(inputValue);
   addToCart(inputValue);
   inputText.value='';
}
const display = value=>{
   const ul=document.getElementById('ul');
   const li=document.createElement('li');
   li.innerText=value;
   ul.appendChild(li)
}
const checkCart=()=>{
   const cart = localStorage.getItem('cart');
   let cartObj;
   if(cart){
       cartObj=JSON.parse(cart);
   }
   else
   {
       cartObj = {};
   }     
   return cartObj;
}
const addToCart=product=>{
   const cart = checkCart();

   if(cart[product])
      cart[product]=cart[product]+1;
   else
      cart[product] = 1;
   const addcart = JSON.stringify(cart)
   localStorage.setItem('cart',addcart)

}
delay();
const allClear = ()=>{
   document.getElementById('ul').textContent= '';
   localStorage.removeItem('cart')
   console.log('er')
}
