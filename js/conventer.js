let formElement = document.querySelector(".conventer");
let currentCurrency = document.querySelector(".js-initial");
let conventerResult = document.querySelector(".conventer__result");
let fromCurrency = document.querySelector(".js-from");
let toCurrency = document.querySelector(".js-to");


formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let amount = +currentCurrency.value;
    let currency = fromCurrency.value;
    let secondCurrency = toCurrency.value;

    if (fromCurrency.value === toCurrency.value) {
        conventerResult.innerText = amount;
        console.log(amount);
    } else {
        switch (currency) {
            case "EUR":
                switch (secondCurrency) {
                    case "PLN":
                        result = amount * 4.47;
                        break;
                    case "USD":
                        result = amount * 1.13;
                        break;
                    case "CZK":
                        result = amount * 26.68;
                        break;
                }
                break;
            case "PLN":
                switch (secondCurrency) {
                    case "EUR":
                        result = amount * 0.22;
                        break;
                    case "USD":
                        result = amount * 0.25;
                        break;
                    case "CZK":
                        result = amount * 5.96;
                        break;
                }
                break;
            case "USD":
                switch (secondCurrency) {
                    case "PLN":
                        result = amount * 3.96;                           
                        break;
                    case "EUR":
                        result = amount * 0.89;
                        break;
                    case "CZK":
                        result = amount * 23.62;
                        break;
                }
                break;
            case "CZK":
                switch (secondCurrency) {
                    case "PLN":
                        result = amount * 0.17;                           
                        break;
                    case "USD":
                        result = amount * 0.042;
                        break;
                    case "EUR":
                        result = amount * 0.037;
                        break;
                }
                break;
        }
        conventerResult.innerText = result.toFixed(2);
    }});
