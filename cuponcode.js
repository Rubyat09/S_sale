


document.getElementById('cupon-text').addEventListener('keyup', function (event) {
    const cuponText = event.target.value;
    console.log(cuponText);
});

document.getElementById('apply-button').addEventListener('click', function () {
    const cuponText = document.getElementById('cupon-text').value;

    if (cuponText === 'SELL200') {
        const currentTotalPriceElement = document.getElementById('current-total-price');
        const currentTotalPriceString = currentTotalPriceElement.textContent;
        const currentTotalPrice = parseFloat(currentTotalPriceString);

        const discountStringElement = document.getElementById('discount');
        const grandTotalElement = document.getElementById('grand-total');

        const discountPrice = currentTotalPrice * 0.2;
        const fixedDiscountPrice = discountPrice.toFixed(2);
        discountStringElement.textContent = fixedDiscountPrice;

        const grandTotalPrice = currentTotalPrice - discountPrice;
        const fixedGrandTotalPrice = grandTotalPrice.toFixed(2);
        grandTotalElement.textContent = fixedGrandTotalPrice;
    } else {
        // Coupon code doesn't match 'SELL200'
        // You can update the UI to show that the coupon is invalid here
        const discountStringElement = document.getElementById('discount');
        discountStringElement.textContent = '0.00'; // Reset discount

       
    }
});
















