function login() {
  var un = document.forms["myform"]["uname"].value;
  var pass = document.forms["myform"]["pass"].value;

  if (un == "user") {
    if (pass = "123") {
      alert("login succesful");
    } else {
      alert("incorrect username or password");
    }
  } else {
    alert("incorrect username or password");
  }

}