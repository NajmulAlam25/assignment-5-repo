let total = 0;
let x=0;
let y=0;
function SportswearSection(terget){
  
const itemName=terget.childNodes[1].innerText;
const li= document.createElement('li')
li.innerText=itemName;
const selectCardContainer=document.getElementById('select-card')
selectCardContainer.appendChild(li);

const price= terget.childNodes[5].innerText;
let countPrice= parseFloat(price)
  total=parseFloat(total) + countPrice;
  if(total !=0 && x==0 ){
    const MakeParces=document.getElementById('Make-Parces');
    MakeParces.removeAttribute('disabled');
  
        x++;
  
  };
  if(total>=200 && y==0){
    const couponCode=document.getElementById('coupon-btn');
    couponCode.removeAttribute('disabled');
    y++;
  }


  const totalPrice= document.getElementById('total-price');
  totalPrice.innerText= total.toFixed(2);
 
}
  // ----------------------------------coupon-part--------------------


    
   
   
  

  const couponButton = document.getElementById('coupon-btn')

  
  
  couponButton.addEventListener('click', function() {

    const totalPrice= document.getElementById('total-price');
    const totalPriceValue= totalPrice.innerText;

    const disableBtn= document.getElementById('disable-btn')
    const inputDisableBtn=disableBtn.value 
    if(inputDisableBtn==='SELL200'){
       const calDis=parseFloat(totalPriceValue)*(20/100);

       const discountCalculation= document.getElementById('discount-calculation')
       discountCalculation.innerText=calDis.toFixed(2);
       const calculationAmount=parseFloat(totalPriceValue)
       -calDis;
       
       const totalCall=document.getElementById('total-call');
       
       
       totalCall.innerText= calculationAmount.toFixed(2);

    }

  })


  // -------------modal------------------------------

  document.getElementById('modal-btn').addEventListener('click',function(){
    let modalPart=document.getElementById('select-card').innerText='';
    let modalTotal=document.getElementById('total-price').innerText='0'
    let modalDiscountTotal=document.getElementById('discount-calculation').innerText='0'
    let modalSubTotal=document.getElementById('total-call').innerText='0'

if(modalPart==='' && modalTotal==='0' && modalDiscountTotal==='0' && modalSubTotal==='0'){
  Window.location.href='index.html'
}



  } )
