{
    init();

    const fromCurrency = document.querySelector(".js-from");
    const toCurrency = document.querySelector(".js-to");

    function myResult(amount, currency, secondCurrency) {

        const rateEUR = 4.4;
        const rateUSD = 3.7;
        const rateCZK = 0.16;
        const ratePLN = 1;

        if (currency === secondCurrency) {
            return amount;
        };

        switch (currency) {
            case "EUR":
                amount *= rateEUR;
                break;
            case "USD":
                amount *= rateUSD;
                break;
            case "CZK":
                amount *= rateCZK;
                break;
            case "PLN":
                amount *= ratePLN;
                break;
        };

        switch (secondCurrency) {
            case "EUR":
                return amount / rateEUR;
            case "USD":
                return amount / rateUSD;
            case "CZK":
                return amount / rateCZK;
            case "PLN":
                return amount;
        };
    };

    function onFormSubmit(event) {
        event.preventDefault();

        const currentResult = document.querySelector(".js-initial");
        const conventerResult = document.querySelector(".conventer__result");

        const result = myResult(+currentResult.value, fromCurrency.value, toCurrency.value);
        conventerResult.innerText = +result.toFixed(2) + ' ' + toCurrency.value;
    };

    function init() {
        const formElement = document.querySelector(".conventer");

        formElement.addEventListener("submit", onFormSubmit);

    };
}