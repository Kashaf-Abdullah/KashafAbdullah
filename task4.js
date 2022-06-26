function validate() {
  var username = document.getElementById("name").value;

  var email = document.getElementById("email").value;
  var letters = /^[A-Za-z]+$/;


  var checkbox = document.getElementById('cb');

  var rb1 = document.getElementById('male');

  var rb2 = document.getElementById('female');

  var error_message = document.getElementById("error_message");

  var error_message3 = document.getElementById("error_message");
  var error_message4 = document.getElementById("error_message");
  var error_message5 = document.getElementById("error_message");

  error_message.style.padding = "10px";

  error_message3.style.padding = "10px";
  error_message4.style.padding = "10px";


  error_message5.style.padding = "10px";


  var text;


  if (username.match(letters)) {
    if (email.indexOf("@") == -1) {
      text = "Please Enter valid Email";
      error_message3.innerHTML = text;
      return false;
    }


    if (username.length == "") {
      text = "Please name Name";
      error_message.innerHTML = text;
      return false;
    }

    if (checkbox.checked == false) {
      text = "Please Accept terms and consitions";
      error_message4.innerHTML = text;
      return false;
    }

    if (rb1.checked == false && rb2.checked == false) {
      text = "select gender";
      error_message5.innerHTML = text;
      return false;
    }

    else {
      alert("Form Submitted Successfully!");
        console.log("gender  male:"+rb1.checked+"female :"+rb1.checked );
      console.log(email);
      console.log(username);
      return true;
    }
  }
  else {
    text = "invalid name";
    error_message.innerHTML = text;
    return false;
  }



}

