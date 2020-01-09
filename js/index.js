


// Get Input, check Value and reset form for a new input

startInput();
$("button").click(function() {
  var inputEmail = $("input").val();
  checkMail(inputEmail);
  newInput();
});


//*********************** Functions *****************************

// Start Input Function

function startInput(){
  $("input").click(function() {
    $(this).attr("value", "").addClass("input-msg");
  });  
}

// New Input function  
function newInput(){
  $("input").click(function() {
    $("button").removeClass("shadow-button").prop('disabled', false);
    $(".alert").remove();
    $(".icon-error").remove();
  });
}

//Check Mail Function

function checkMail(input) {

  var regex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;  
  var check = regex.test(input);
  
  if (check === true) {
    $("form").after("<p class='alert message'>Thanks for your email!</p>");
    $('input').prop('disabled', true);
    $('button').prop('disabled', true);
  } else {
    $("input").addClass("form-control-custom-alert").after("<img class='icon-error' src='images/icon-error.svg' alt='Icon Error' />");
    $("button").addClass("shadow-button").prop('disabled', true);;
    $("form").after("<p class='alert message'>Please provide a valid email!</p>");
  }
}
