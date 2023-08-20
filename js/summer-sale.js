let total = 0;

function clickedCard(card) {
    const selectedItems = document.getElementById('selected-items');
    const count = selectedItems.childElementCount;
    const itemName = card.childNodes[3].childNodes[3].innerText;

    const li = document.createElement('li');
    li.innerHTML = `${count + 1} ${itemName}`;

    selectedItems.appendChild(li);
    li.classList.add('my-3')

    const itemPrice = card.childNodes[3].childNodes[5].innerText.split(" ")[0];

    total = total + parseFloat(itemPrice);
    const totalInDecimal = total.toFixed(2);

    document.getElementById('total-price').innerText = totalInDecimal;

    if (totalInDecimal > 0) {
        document.getElementById('purchase-btn').removeAttribute("disabled");
        if (totalInDecimal >= 200) {
            document.getElementById('coupon-btn').removeAttribute("disabled");

        }
    }
}