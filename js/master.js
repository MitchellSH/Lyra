$(document).ready(initialize);

function initialize(){
  materialize();
  getSpaceDataForFun();
}

function materialize(){
  $(".button-collapse").sideNav();
  $('.parallax').parallax();
}

function getSpaceDataForFun(){
  var src = "//api.coindesk.com/v1/bpi/currentprice.json";
  $.ajax({
    url: src,
    type: 'GET',
    dataType: 'json',
    success: populateDOMWithFunData,
    error: function() {
        console.log('Uh Oh!');
    },
  });
}

function populateDOMWithFunData(data){
  console.log(data);
  $('#coin').append("$" + data["bpi"]["USD"]["rate"].slice(0,-2));
  $('#code').append(data["bpi"]["USD"]["code"]);
  $('#type').append(data["chartName"]);
}
