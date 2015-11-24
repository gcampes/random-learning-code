$(document).ready(function(){

  var calculation = "";
  function calculate(){
    try{
      result = eval(calculation);
      console.log(result);
      showOnScreen(1, result);
      calculation = "";
    }
    catch(e){
      showOnScreen(1, "error :(");
    }
    finally{
      $('.operation').fadeOut(function(){$('.result').fadeIn()});
    }
  }

  function addparameter(){
    if($('.result').attr('display') != 'none')
      $('.result').fadeOut(function(){$('.operation').fadeIn()});
    console.log(data);
    calculation += data;
    showOnScreen(0, calculation);
  }

  function del(){
    calculation = calculation.substr(0, calculation.length -1);
    showOnScreen(0, calculation);
    if($('.result').attr('display') != 'none')
      $('.result').fadeOut(function(){$('.operation').fadeIn()});
  }

  function clr(){
    calculation = "";
    showOnScreen(0, calculation);
    if($('.result').attr('display') != 'none')
      $('.result').fadeOut(function(){$('.operation').fadeIn()});
  }

  function showOnScreen(index, value){
    $('.screen').children()[index].textContent = value;
  }

  $('.operation').click(function(){
      $('.operation').fadeOut(function(){$('.result').fadeIn()});
  });

  $('.result').click(function(){
      $('.result').fadeOut(function(){$('.operation').fadeIn()});
  });

  $('.key').click(function(){
    data = $(this).attr('data')
    switch (data) {
      case '=':
        calculate();
        break;
      case 'del':
        del();
        break;
        case 'clr':
        clr();
        break;
      default:
        addparameter();
        break;
    }
  });

});
