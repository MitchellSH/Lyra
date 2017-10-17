$(document).ready(initialize);

function initialize(){
  materialize();
  getSpaceDataForFun();
}

function materialize(){
  $(".button-collapse").sideNav();
}

function getSpaceDataForFun(){
  var src = "http://api.open-notify.org/astros.json";
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
  console.log('Success!');
  console.log(data);
}
