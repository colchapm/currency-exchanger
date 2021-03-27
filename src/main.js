import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyExchange from './exchanger.js';


function getRates(response) {
  console.log('inside getrates')
  console.log(response.result)
  if (response.result === "success") {
    $(".showConversion").text(`1 USD = ${response.conversion_rates.JPY} yen`)
  } else {
    $(".showErrors").text(`There was an error processing your request ${response.message}`)
  }
}

async function makeApiCall(currency) {
  console.log('inside makeapi call')
  const response = await CurrencyExchange.getConversion();
  getRates(response);
}


$(document).ready(function() {
  $("#conversion").click(function() {
    let currency = $("#convertedCurrency").val();
    makeApiCall(currency);
  });
});

// $(document).ready(function() {
//   $("form#selections").submit(function() {
//     let promise = CurrencyExchange.getConversion(currency);
//     promise.then(function(response) {
//       const body = JSON.parse(response);
//         $("#output").text(`${USD} US Dollar = ${body.conversion_rates.${convertedCurrency}`);
//       }, function(error) {
//         $(".showErrors").text(`There was an error processing your request ${error}`);
//     });
//   });
// });
