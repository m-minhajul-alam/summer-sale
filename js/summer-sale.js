let total = 0;

function clickedCard(card) {
    const selectedItems = document.getElementById('selected-items');
    const count = selectedItems.childElementCount;
    const itemName = card.childNodes[3].childNodes[3].innerText;

    const li = document.createElement('li');
    li.innerHTML = `${count + 1}. ${itemName}`;

    selectedItems.appendChild(li);
    li.classList.add('my-3')

    const itemPrice = card.childNodes[3].childNodes[5].innerText.split(" ")[0];

    total = total + parseFloat(itemPrice);
    const totalInDecimal = total.toFixed(2);

    document.getElementById('total-price').innerText = totalInDecimal;
    document.getElementById('total').innerText = totalInDecimal;

    if (totalInDecimal > 0) {
        document.getElementById('purchase-btn').removeAttribute("disabled");
        if (totalInDecimal >= 200) {
            document.getElementById('coupon-btn').removeAttribute("disabled");

        }
    }
}


function calculateDiscount(totalPrice) {

    const doscount = ((totalPrice * 20) / 100);
    const totalDoscount = doscount.toFixed(2);
    document.getElementById('discount').innerText = totalDoscount;

    const discountPrice = totalPrice - doscount;
    const totalDiscountPrice = discountPrice.toFixed(2);
    document.getElementById('total').innerText = totalDiscountPrice;


}

document.getElementById('coupon-btn').addEventListener('click', function () {
    const inputField = document.getElementById('input-field');
    const inputValue = inputField.value;
    // console.log(inputValue);
    if (inputValue !== 'SELL200') {
        alert('coupon is not valid')
        return;
    } else {
        const totalPriceString = document.getElementById('total-price').innerText;
        const totalPrice = parseFloat(totalPriceString);
        calculateDiscount(totalPrice);
    }
})

document.getElementById('modal-btn').addEventListener('click', function () {
    location.href = 'index.html';
})