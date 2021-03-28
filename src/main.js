import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyExchange from './exchanger.js';


function getRates(response, conversionAmount, desiredCurrency) {
  if (response.result === "success") {
    $(".showConversion").text(response["conversion_rates"][desiredCurrency]*[conversionAmount]);
  } else {
    $(".showErrors").text(`There was an error processing your request ${response.message}`);
  }
}

async function makeApiCall(conversionAmount, desiredCurrency) {
  const response = await CurrencyExchange.getConversion();
  getRates(response, conversionAmount, desiredCurrency);
}


$(document).ready(function() {
  $("#conversion").click(function() {
    let conversionAmount = $("#usd-amount").val();
    let desiredCurrency = $("#convertedCurrency").val();
    makeApiCall(conversionAmount, desiredCurrency);
  });
});
