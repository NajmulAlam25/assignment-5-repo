let total = 0;
function SportswearSection(terget){
const itemName=terget.childNodes[1].innerText;
const li= document.createElement('li')
li.innerText=itemName;
const selectCardContainer=document.getElementById('select-card')
selectCardContainer.appendChild(li);

const price= terget.childNodes[5].innerText;
  total=parseFloat(total)+ parseFloat(price);
  
  const totalPrice= document.getElementById('total-price').innerText;
  const totalPriceValue= parseInt(totalPrice)
  console.log(typeof totalPriceValue);
}
  // ----------------------------------coupon-part--------------------


    let mainPrice =total; 
    
  const discountPrice = 20; 
  const validCouponCode = 'SELL200';

  
  const couponButton = document.getElementById('coupon-btn')

  couponButton.addEventListener('click', function() {
    const disableBtn= document.getElementById('disable-btn')
    const inputDisableBtn=disableBtn.value 
const inputDisableBtnValue=parseFloat(inputDisableBtn);
// console.log(inputDisableBtn)
    let totalAmount = mainPrice;
// console.log(totalAmount);
    if (inputDisableBtnValue === validCouponCode) {
      if (totalAmount >= 200) {
        const discountAmount = (totalAmount * discountPrice) / 100;
        
        const discountedTotal = totalAmount - discountAmount;

       
        const totalPrice2= document.getElementById('total-price')
        const subTotalString = totalPrice2.innerText
    let subTotalAmount = parseFloat(subTotalString);
    subTotalAmount = discountedTotal;
    totalPrice2.innerText = subTotalAmount.toFixed(2);
    
      }  else {
      
      couponButton.disabled = true; 
    }
  }
  });




