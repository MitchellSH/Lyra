$(document).ready(initialize);

function initialize(){
  materialize();
  getSpaceDataForFun();
  setInterval(getSpaceDataForFun, 5000);
}

function materialize(){
  $(".button-collapse").sideNav();
  $('.parallax').parallax();
}

function getSpaceDataForFun(){
  $.ajax({
    url: '//api.coindesk.com/v1/bpi/currentprice.json',
    type: 'GET',
    dataType: 'json',
    success: function(data) {
      $('#coin').empty();
      $('#coin').append("<img style='margin-right: 20px;' width='32' src='images/bitcoin.svg' />" + data["bpi"]["USD"]["rate"].slice(0,-2));
    },
    error: function() {
        console.log('Uh Oh!');
    },
  });
}
