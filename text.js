 var add;
  add = 0;
  var price = 24;
let addOne1 = () =>{ 
  if(add == 3){
    alert('You cant add more than 3');
      return false;
  }
    add += 1;
    price += 24;
    let more = document.getElementById('plusone').innerHTML = add;
    let most = document.getElementById('priceone').innerHTML = price;
   
}

   var add;
     add = 0;
     var price = 24;
      let minusOne1 = () =>{
        if(add <= 0 && price <= 24){
          alert('you can pay what you dont buy');
           return false;
        } 
       add -= 1;
       price -= 24;
           let more = document.getElementById('plusone').innerHTML = add;
           let most = document.getElementById('priceone').innerHTML = price;
}

var add1;
add1 = 0;
var price1 = 19;
const addOne2 = () =>{
  if(add1 == 3){
    alert('You cant add more than 3');
      return false;
  }
  add1 += 1;
  price1 += 19;
  let more1 = document.getElementById('plustwo').innerHTML = add1;
  let most1 = document.getElementById('pricetwo').innerHTML = price1;
  
}
 var add1;
   add1 = 0;
   var price1 = 19;
    const minusOne2 = () =>{
       if(add1 <= 0 && price1 <= 19){
    alert('you can pay what you dont buy');
     return false;
  } 
     add1 -= 1;
     price1 -= 19;
         let more1 = document.getElementById('plustwo').innerHTML = add1;
         let most1 = document.getElementById('pricetwo').innerHTML = price1;
}


var add2;
add2 = 0;
  var price3 = 28;
const addOne3 = () =>{
  if(add2 == 3){
    alert('You cant add more than 3');
      return false;
  }
  add2 += 1;
  price3 +=28;
  let more2 = document.getElementById('plustree').innerHTML = add2;
  let most2 = document.getElementById('pricetree').innerHTML = price3;
}
 var add2;
   add2 = 0;
    var price3 = 19;
    const minusOne3 = () =>{
      if(add2 <= 0 && price3 <= 28){
        alert('you can pay what you dont buy');
         return false;
      } 
     add2 -= 1;
     price3 -= 19;
         let more2 = document.getElementById('plustree').innerHTML = add2;
         let most2 = document.getElementById('pricetree').innerHTML = price3;
}

var add3;
add3 = 0;
  var price4 = 30;
const addOne4 = () =>{
  if(add3 == 3){
    alert('You cant add more than 3');
      return false;
  }
  add3 += 1;
  price4 += 30;
  let more2 = document.getElementById('plus4').innerHTML = add3;
  let most3 = document.getElementById('pricefour').innerHTML = price4;
}
 var add3;
 var price4 = 30;
   add3 = 0;
    const minusOne4 = () =>{
      if(add3 <= 0 && price4 <= 30){
        alert('you can pay what you dont buy');
         return false;
      } 
     add3 -= 1;
     price4 -= 30;
         let more2 = document.getElementById('plus4').innerHTML = add3;
         let most3 = document.getElementById('pricefour').innerHTML = price4;
}
  const blow = () =>{
      document.getElementById('navs').style.display ="flex";
  }; const HideBlow = () =>{
    document.getElementById('navs').style.display ="none";
}; const showBtns = () =>{
  document.getElementById('bottor').style.display ="flex";
}