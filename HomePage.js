function showDiv() {
  document.getElementById('loginBoxEmail').style.display = "block";
  document.getElementById('loginBoxPass').style.display = "block";
}

$(document).ready(function(){
  $( "#signInButton" ).click(function() {
    document.getElementById('loginBoxEmail').style.display = "block";
    document.getElementById('loginBoxPass').style.display = "block";
  });
});

#$(selector).action()
