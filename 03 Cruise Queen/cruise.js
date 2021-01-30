function ticketNumPriceCounter(isPlus, ticketCountId) {
    var countAsString = document.getElementById(ticketCountId).value;
    var countAsNumber = parseInt(countAsString);
    var countNewNumber = countAsNumber;

    if (isPlus == true) {
        countNewNumber = countAsNumber + 1;
    }
    if (isPlus == false && countAsNumber > 0) {
        countNewNumber = countAsNumber - 1;
    }

    document.getElementById(ticketCountId).value = countNewNumber;

    if (ticketCountId == 'countOfFirstClass') {
        var ticketNewPrice = countNewNumber * 150;
        document.getElementById('totalFirstClassTicket').innerText = ticketNewPrice;
    }
    if (ticketCountId == 'countOfEconomy') {
        var ticketNewPrice = countNewNumber * 100;
        document.getElementById('totalEconomyTicket').innerText = ticketNewPrice;
    }

    // -> Subtotal Part

    var priceOfFirstClass = parseInt(document.getElementById('totalFirstClassTicket').innerText);
    var priceOfEconomy = parseInt(document.getElementById('totalEconomyTicket').innerText);
    var subtotal = priceOfFirstClass + priceOfEconomy;

    document.getElementById('subtotal').innerText = subtotal;

    //Vat Part
    var vat = subtotal * (10 / 100);
    var totalVatPrice = vat + subtotal;
    document.getElementById('total').innerText = totalVatPrice;
    document.getElementById('vatShow').innerText = vat;

}

function successPurchase() {
    var totalPrice = parseInt(document.getElementById('total').innerText);

    if (totalPrice > 100) {
        document.getElementById('form').style.display = 'none';
        document.getElementById('formSuccess').style.display = 'block';

        toShowInSuccess('showNumberOfFirstClass', 'countOfFirstClass');
        toShowInSuccess('showNumberOfEconomy', 'countOfEconomy');
        showTotalVatPrice()
    }
}


function toShowInSuccess(showNumberInSuccess, getCountFromInput, totalVatPrice, showVatPrice) {

    var toShowTicketCount = document.getElementById(showNumberInSuccess);
    return toShowTicketCount.innerText = document.getElementById(getCountFromInput).value;
}

function showTotalVatPrice() {
    var totalVatPrice = document.getElementById('total').innerText;
    document.getElementById('showTotalCost').innerText = totalVatPrice;
}

