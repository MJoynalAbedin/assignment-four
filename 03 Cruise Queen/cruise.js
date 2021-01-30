// -> Function for calculation of ticket counting and price and this is called in onclick event in buttons

function ticketNumPriceCounter(isPlus, ticketCountId) {
    var countAsString = document.getElementById(ticketCountId).value; // For the existing value of ticket count
    var countAsNumber = parseInt(countAsString);

    var countNewNumber = countAsNumber; // New var to store ticket count

    if (isPlus == true) {
        countNewNumber = countAsNumber + 1;
    }
    if (isPlus == false && countAsNumber > 0) {
        countNewNumber = countAsNumber - 1;
    }

    document.getElementById(ticketCountId).value = countNewNumber; //-> Stored new count value in UI input

    if (ticketCountId == 'countOfFirstClass') {
        var ticketNewPrice = countNewNumber * 150;
        document.getElementById('totalFirstClassTicket').innerText = ticketNewPrice; //-> Stored in UI First class ticket's total Price
    }
    if (ticketCountId == 'countOfEconomy') {
        var ticketNewPrice = countNewNumber * 100;
        document.getElementById('totalEconomyTicket').innerText = ticketNewPrice; //-> Stored in UI Economy ticket's total Price
    }

    // -> Subtotal Part

    var priceOfFirstClass = parseInt(document.getElementById('totalFirstClassTicket').innerText);
    var priceOfEconomy = parseInt(document.getElementById('totalEconomyTicket').innerText);
    var subtotal = priceOfFirstClass + priceOfEconomy; //-> Added two existing price for total

    document.getElementById('subtotal').innerText = subtotal; //-> Stored the value in UI subtotal part

    //-> Vat Part

    var vat = subtotal * (10 / 100); //-> Got 10% vat price
    document.getElementById('vatShow').innerText = vat; //-> VAT value has been stored in UI

    var totalVatPrice = vat + subtotal;
    document.getElementById('total').innerText = totalVatPrice; //-> total value has been stored in UI

}

//-> This function is for purchasing success, and called in book now button onclick

function successPurchase() {
    var totalPrice = parseInt(document.getElementById('total').innerText); //-> Got total Price

    if (totalPrice > 100) {
        document.getElementById('form').style.display = 'none';
        document.getElementById('formSuccess').style.display = 'block';

        toShowInSuccess('showNumberOfFirstClass', 'countOfFirstClass');
        toShowInSuccess('showNumberOfEconomy', 'countOfEconomy');
        showTotalVatPrice()
    }
}

//-> This is used to show ticket's number in success UI, called in successPurchase() function

function toShowInSuccess(showNumberInSuccess, getCountFromInput) {

    var toShowTicketCount = document.getElementById(showNumberInSuccess);
    return toShowTicketCount.innerText = document.getElementById(getCountFromInput).value; //-> Stored in UI
}

//-> This is used to show ticket's total price in success UI successPurchase() function

function showTotalVatPrice() {
    var totalVatPrice = document.getElementById('total').innerText;
    return document.getElementById('showTotalCost').innerText = totalVatPrice; //-> Stored in UI
}

