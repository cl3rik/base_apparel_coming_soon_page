
// Initialize/Reset Input  

$("input").click(function() {
  $(this).attr("value", "");
  $(this).addClass("input-msg");
  $("button").removeClass("shadow-button");
  $(".alert").remove();
  $(".icon-error").remove();
});

// Get Input and check Value
$("button").click(function() {
    var inputEmail = $("input").val();
    checkMail(inputEmail);
});

//Check Mail Function

function checkMail(input) {

  var regex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;  
  var check = regex.test(input);
  
  if (check === true) {
    $("form").after("<p class='alert message'>Thanks for your email!</p>");
    $('input').prop('disabled', true);
  } else {
    $("input").addClass("form-control-custom-alert");
    $("button").addClass("shadow-button");
    $("input").after("<img class='icon-error' src='images/icon-error.svg' alt='Icon Error' />");
    $("form").after("<p class='alert message'>Please provide a valid email!</p>");
  }
}
