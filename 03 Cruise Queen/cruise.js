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

    var totalVatPrice = subtotal * (10 / 100) + subtotal;

    document.getElementById('total').innerText = totalVatPrice;

}

