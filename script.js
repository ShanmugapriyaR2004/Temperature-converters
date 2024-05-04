
let btn=document.getElementById('submit');
let res=document.getElementById('result');
btn.addEventListener('click',()=>{
    let cel=Number(document.getElementById('input').value);
    let Result=(cel*9/5)+(32);
    res.innerHTML=Result+'f';
    
})
let fahbtn=document.getElementById('fah');
let fahresult=document.getElementById('fahres')
fahbtn.addEventListener('click',()=>{
    let fah=Number(document.getElementById('fahrenheit').value);
   let  fahrenheitresult=(fah-32)*(5/9);
   fahresult.innerHTML=fahrenheitresult.toFixed(2) +'c';
})



