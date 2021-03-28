import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyExchange from './exchanger.js';


function getRates(response, conversionAmount, currencyCode) {
  if ((response["conversion_rates"][currencyCode]) === undefined) {
    $(".showErrors").text(`The selected currency code is not available`);
  } else if (response.result === "success") {
    $(".showConversion").text(response["conversion_rates"][currencyCode]*[conversionAmount]);
  } else {
    $(".showErrors").text(`There was an error processing your request: ${response["error-type"]}`);
  }
}

async function makeApiCall(conversionAmount, currencyCode) {
  const response = await CurrencyExchange.getConversion();
  getRates(response, conversionAmount, currencyCode);
}


$(document).ready(function() {
  $("#conversion").click(function() {
    let conversionAmount = $("#usd-amount").val();
    const inputCurrency = $("#convertedCurrency").val();
    let currencyCode = inputCurrency.substring(0,3);
    makeApiCall(conversionAmount, currencyCode);
  });
});
