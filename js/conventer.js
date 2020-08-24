{
    init();

    const fromCurrency = document.querySelector(".js-from");
    const toCurrency = document.querySelector(".js-to");

    function myResult(amount, currency, secondCurrency) {

        if (fromCurrency.value === toCurrency.value) {
            return amount;
        } else {
            switch (currency) {
                case "EUR":
                    switch (secondCurrency) {
                        case "PLN":
                            return amount * 4.47;
                        case "USD":
                            return amount * 1.13;
                        case "CZK":
                            return amount * 26.68;
                    }
                    break;
                case "PLN":
                    switch (secondCurrency) {
                        case "EUR":
                            return amount * 0.22;
                        case "USD":
                            return amount * 0.25;
                        case "CZK":
                            return amount * 5.96;
                    }
                    break;
                case "USD":
                    switch (secondCurrency) {
                        case "PLN":
                            return amount * 3.96;
                        case "EUR":
                            return amount * 0.89;
                        case "CZK":
                            return amount * 23.62;
                    }
                    break;
                case "CZK":
                    switch (secondCurrency) {
                        case "PLN":
                            return amount * 0.17;
                        case "USD":
                            return amount * 0.042;
                        case "EUR":
                            return amount * 0.037;
                    }
                    break;
            }
        }
    }

    function onFormSubmit(event) {
        event.preventDefault();

        const currentResult = document.querySelector(".js-initial");
        const conventerResult = document.querySelector(".conventer__result");

        const result = myResult(+currentResult.value, fromCurrency.value, toCurrency.value);
        conventerResult.innerText = +result.toFixed(2) + ' ' + toCurrency.value;
    }

    function init() {
        const formElement = document.querySelector(".conventer");

        formElement.addEventListener("submit", onFormSubmit);
    
    }
}