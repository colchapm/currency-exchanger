import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyExchange from './exchanger.js';

$(document).ready(function() {
  $("#getRates").click(function() {
    let promise = CurrencyExchange.getConversion(currency);
    promise.then(function(response) {
      const body = JSON.parse(response);
        $("#output").text(`${USD} US Dollar = ${currency}`);
      }, function(error) {
        $(".showErrors").text(`There was an error processing your request ${error}`);
    });
  });
});
