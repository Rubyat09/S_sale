document.getElementById('go-home').addEventListener('click', function () {
    const applyButton = document.getElementById('apply-button');
    const makePurchaseButton = document.getElementById('make-purchase');
    const cuponTextElement = document.getElementById('cupon-text');
    const listContainerElement = document.getElementById('list-container');
    const currentTotalPriceElement = document.getElementById('current-total-price');
    const discountStringElement = document.getElementById('discount');
    const grandTotalElement = document.getElementById('grand-total');
    applyButton.classList.remove('opacity-100');
    makePurchaseButton.classList.remove('opacity-100');
   
    applyButton.setAttribute('disabled', 'true');
    applyButton.classList.add('opacity-60');
    makePurchaseButton.setAttribute('disabled', 'true');
    makePurchaseButton.classList.add('opacity-60'); 
    cuponTextElement.value = '';
    listContainerElement.innerHTML = ''; 
    currentTotalPriceElement.textContent = '0.00';
    discountStringElement.textContent = '0.00';
    grandTotalElement.textContent = '0.00';
});