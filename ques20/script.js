function validate(str) {
  var format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (format.test(str)) {
    document.write("Valid email address!");
  } else {
    document.write("You have entered an invalid email address!");
  }
}

validate("geetika@example.com");
