$(document).ready(initialize);

function initialize(){
  materialize();
  getSpaceDataForFun();
}

function materialize(){
  $(".button-collapse").sideNav();
}

function getSpaceDataForFun(){
  var src = "//api.open-notify.org/astros.json";
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
  // $('#astroNum').text(data["number"]);
  // $('#astroShip').text(data["people"][0].craft);
  // for(var i = 0; i < data["people"].length; i++){
  //   $('#astroPeeps').append("<p>" + data["people"][i].name + "</p>");
  // }
}
