
document.getElementById('card-1').addEventListener('click', function () {
    const applyButton = document.getElementById('apply-button');
    const makePurchaseButton = document.getElementById('make-purchase');
    const currentTotalPriceElement = document.getElementById('current-total-price');
    
    const card1PriceString = document.getElementById('card-1-price').textContent;
    const card1Price = parseFloat(card1PriceString);
    const currentTotalPriceString = currentTotalPriceElement.textContent;
    const currentTotalPrice = parseFloat(currentTotalPriceString);
    const totalPrice = currentTotalPrice + card1Price;
    const totalPriceString = totalPrice.toString();
    currentTotalPriceElement.textContent = totalPriceString;


       

    
        const grandTotalElement = document.getElementById('grand-total');
        
        grandTotalElement.textContent = currentTotalPriceElement.textContent; 

     
     if (totalPrice > 0) {
        makePurchaseButton.removeAttribute('disabled');
        makePurchaseButton.classList.remove('opacity-60');
        makePurchaseButton.classList.add('opacity-100');
    } 
    
    if (totalPrice >= 200) {
        console.log('Apply button enabled');
        applyButton.removeAttribute('disabled');
        applyButton.classList.remove('opacity-60');
        applyButton.classList.add('opacity-100');
    }
  

    
});
// card-2


document.getElementById('card-2').addEventListener('click', function () {
    const applyButton = document.getElementById('apply-button');
    const makePurchaseButton = document.getElementById('make-purchase');
    const currentTotalPriceElement = document.getElementById('current-total-price');
    const card2PriceString = document.getElementById('card-2-price').textContent;
    const card2Price = parseFloat(card2PriceString);
    
    const currentTotalPriceString = currentTotalPriceElement.textContent;
    const currentTotalPrice = parseFloat(currentTotalPriceString);
    const totalPrice = currentTotalPrice + card2Price;
    const totalPriceString = totalPrice.toString();
    currentTotalPriceElement.textContent = totalPriceString;

    const grandTotalElement = document.getElementById('grand-total');
        
        grandTotalElement.textContent = currentTotalPriceElement.textContent; 

    if (totalPrice > 0) {
        makePurchaseButton.removeAttribute('disabled');
        makePurchaseButton.classList.remove('opacity-60');
        makePurchaseButton.classList.add('opacity-100');
    }
   
    if (totalPrice >= 200) {
        applyButton.removeAttribute('disabled');
        applyButton.classList.remove('opacity-60');
        applyButton.classList.add('opacity-100');
    } 
    
    
   
});


document.getElementById('card-3').addEventListener('click', function () {
    const applyButton = document.getElementById('apply-button');
    const makePurchaseButton = document.getElementById('make-purchase');
    const currentTotalPriceElement = document.getElementById('current-total-price');
    const card3PriceString = document.getElementById('card-3-price').textContent;
    const card3Price = parseFloat(card3PriceString);
    
    const currentTotalPriceString = currentTotalPriceElement.textContent;
    const currentTotalPrice = parseFloat(currentTotalPriceString);
    const totalPrice = currentTotalPrice + card3Price;
    const totalPriceString = totalPrice.toString();
    currentTotalPriceElement.textContent = totalPriceString;

    const grandTotalElement = document.getElementById('grand-total');
        
        grandTotalElement.textContent = currentTotalPriceElement.textContent; 

    if (totalPrice > 0) {
        makePurchaseButton.removeAttribute('disabled');
        makePurchaseButton.classList.remove('opacity-60');
        makePurchaseButton.classList.add('opacity-100');
    } 
 
    if (totalPrice >= 200) {
        applyButton.removeAttribute('disabled');
        applyButton.classList.remove('opacity-60');
        applyButton.classList.add('opacity-100');
    } 
    

    
   
});
document.getElementById('card-4').addEventListener('click', function () {
    const applyButton = document.getElementById('apply-button');
    const makePurchaseButton = document.getElementById('make-purchase');
    const currentTotalPriceElement = document.getElementById('current-total-price');
    const card4PriceString = document.getElementById('card-4-price').textContent;
    const card4Price = parseFloat(card4PriceString);
    
    const currentTotalPriceString = currentTotalPriceElement.textContent;
    const currentTotalPrice = parseFloat(currentTotalPriceString);
    const totalPrice = currentTotalPrice + card4Price;
    const totalPriceString = totalPrice.toString();
    currentTotalPriceElement.textContent = totalPriceString;

    const grandTotalElement = document.getElementById('grand-total');
        
        grandTotalElement.textContent = currentTotalPriceElement.textContent; 

    if (totalPrice > 0) {
        makePurchaseButton.removeAttribute('disabled');
        makePurchaseButton.classList.remove('opacity-60');
        makePurchaseButton.classList.add('opacity-100');
    } 
    
    if (totalPrice >= 200) {
        applyButton.removeAttribute('disabled');
        applyButton.classList.remove('opacity-60');
        applyButton.classList.add('opacity-100');
    } 
  
    
   
});
document.getElementById('card-5').addEventListener('click', function () {
    const applyButton = document.getElementById('apply-button');
    const makePurchaseButton = document.getElementById('make-purchase');
    const currentTotalPriceElement = document.getElementById('current-total-price');
    const card5PriceString = document.getElementById('card-5-price').textContent;
    const card5Price = parseFloat(card5PriceString);

    
    const currentTotalPriceString = currentTotalPriceElement.textContent;
    const currentTotalPrice = parseFloat(currentTotalPriceString);
    const totalPrice = currentTotalPrice + card5Price;
    const totalPriceString = totalPrice.toString();
    currentTotalPriceElement.textContent = totalPriceString;

    const grandTotalElement = document.getElementById('grand-total');
        
        grandTotalElement.textContent = currentTotalPriceElement.textContent; 

    if (totalPrice > 0) {
        makePurchaseButton.removeAttribute('disabled');
        makePurchaseButton.classList.remove('opacity-60');
        makePurchaseButton.classList.add('opacity-100');
    } 
    

   
    if (totalPrice >= 200) {
        applyButton.removeAttribute('disabled');
        applyButton.classList.remove('opacity-60');
        applyButton.classList.add('opacity-100');
    } 
   

   
    
});
document.getElementById('card-6').addEventListener('click', function () {
    const applyButton = document.getElementById('apply-button');
    const makePurchaseButton = document.getElementById('make-purchase');
    const currentTotalPriceElement = document.getElementById('current-total-price');
    const card6PriceString = document.getElementById('card-6-price').textContent;
    const card6Price = parseFloat(card6PriceString);
    
    const currentTotalPriceString = currentTotalPriceElement.textContent;
    const currentTotalPrice = parseFloat(currentTotalPriceString);
    const totalPrice = currentTotalPrice + card6Price;
    const totalPriceString = totalPrice.toString();
    currentTotalPriceElement.textContent = totalPriceString;

    const grandTotalElement = document.getElementById('grand-total');
        
        grandTotalElement.textContent = currentTotalPriceElement.textContent; 

    if (totalPrice > 0) {
        makePurchaseButton.removeAttribute('disabled');
        makePurchaseButton.classList.remove('opacity-60');
        makePurchaseButton.classList.add('opacity-100');
    } 
    

    
    if (totalPrice >= 200) {
        applyButton.removeAttribute('disabled');
        applyButton.classList.remove('opacity-60');
        applyButton.classList.add('opacity-100');
    } 
    

    
    
});
document.getElementById('card-7').addEventListener('click', function () {
    const applyButton = document.getElementById('apply-button');
    const makePurchaseButton = document.getElementById('make-purchase');
    const currentTotalPriceElement = document.getElementById('current-total-price');
    const card7PriceString = document.getElementById('card-7-price').textContent;
    const card7Price = parseFloat(card7PriceString);
    
    const currentTotalPriceString = currentTotalPriceElement.textContent;
    const currentTotalPrice = parseFloat(currentTotalPriceString);
    const totalPrice = currentTotalPrice + card7Price;
    const totalPriceString = totalPrice.toString();
    currentTotalPriceElement.textContent = totalPriceString;

    const grandTotalElement = document.getElementById('grand-total');
        
        grandTotalElement.textContent = currentTotalPriceElement.textContent; 

    if (totalPrice > 0) {
        makePurchaseButton.removeAttribute('disabled');
        makePurchaseButton.classList.remove('opacity-60');
        makePurchaseButton.classList.add('opacity-100');
    }
    

    
    if (totalPrice >= 200) {
        applyButton.removeAttribute('disabled');
        applyButton.classList.remove('opacity-60');
        applyButton.classList.add('opacity-100');
    } 
  

    
    
});
document.getElementById('card-8').addEventListener('click', function () {
    const applyButton = document.getElementById('apply-button');
    const makePurchaseButton = document.getElementById('make-purchase');
    const currentTotalPriceElement = document.getElementById('current-total-price');
    const card8PriceString = document.getElementById('card-8-price').textContent;
    const card8Price = parseFloat(card8PriceString);
    
    const currentTotalPriceString = currentTotalPriceElement.textContent;
    const currentTotalPrice = parseFloat(currentTotalPriceString);
    const totalPrice = currentTotalPrice + card8Price;
    const totalPriceString = totalPrice.toString();
    currentTotalPriceElement.textContent = totalPriceString;

    const grandTotalElement = document.getElementById('grand-total');
        
        grandTotalElement.textContent = currentTotalPriceElement.textContent; 
    
    if (totalPrice > 0) {
        makePurchaseButton.removeAttribute('disabled');
        makePurchaseButton.classList.remove('opacity-60');
        makePurchaseButton.classList.add('opacity-100');
    } 
    

    
    if (totalPrice >= 200) {
        applyButton.removeAttribute('disabled');
        applyButton.classList.remove('opacity-60');
        applyButton.classList.add('opacity-100');
    } 
    

    
});
document.getElementById('card-9').addEventListener('click', function () {
    const applyButton = document.getElementById('apply-button');
    const makePurchaseButton = document.getElementById('make-purchase');
    const currentTotalPriceElement = document.getElementById('current-total-price');
    const card9PriceString = document.getElementById('card-9-price').textContent;
    const card9Price = parseFloat(card9PriceString);
    
    const currentTotalPriceString = currentTotalPriceElement.textContent;
    const currentTotalPrice = parseFloat(currentTotalPriceString);
    const totalPrice = currentTotalPrice + card9Price;
    const totalPriceString = totalPrice.toString();
    currentTotalPriceElement.textContent = totalPriceString;

    const grandTotalElement = document.getElementById('grand-total');
        
        grandTotalElement.textContent = currentTotalPriceElement.textContent; 
    
    if (totalPrice > 0) {
        makePurchaseButton.removeAttribute('disabled');
        makePurchaseButton.classList.remove('opacity-60');
        makePurchaseButton.classList.add('opacity-100');
    } 
   

  
    if (totalPrice >= 200) {
        applyButton.removeAttribute('disabled');
        applyButton.classList.remove('opacity-60');
        applyButton.classList.add('opacity-100');
    } 
    

    
});


