//define functions here

function getIt() {
  $('p').on('click', function(){
    alert("Hey!");
  })
}
function frameIt() {
  $('img').on('load', function(){
    $('img').addClass('tasty');
  })
}

function pressIt() {
  $('input').on('keydown', function(key){
    if (parseInt(key.which || key.detail) == 71){
      alert('G has been pressed.')
    }
  })
}

function submitIt(){
  $('form').on('submit', function(){
    alert('Your form is going to be submitted now.')
  })
}

$(document).ready(function(){

// call functions here
getIt();
frameIt()
pressIt()
submitIt()
});
