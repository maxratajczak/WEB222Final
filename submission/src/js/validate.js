function validate(event) {
  // TODO - write custom validation logic to validate the longitude and latitude
  // values. The latitude value must be a number between -90 and 90; the
  // longitude value must be a number between -180 and 180. If either/both are
  // invalid, show the appropriate error message in the form, and stop the
  // form from being submitted. If both values are valid, allow the form to be
  // submitted.

  //Getting the values of the lat and long input
  var lat = document.querySelector("#lat").value;
  var long = document.querySelector("#long").value;

  //Selecting the error messages in the html
  var latError = document.getElementById("errorLat");
  var longError = document.getElementById("errorLong");

  //Resetting the error messages so it can recheck values & show error to proper invalid value
  resetErrors(latError, longError);

  //Validating the lat and long
  if (isNaN(lat) || lat < -90 || lat > 90) {
    showError(latError);
    return false;
  } else if (isNaN(long) || long < -180 || long > 180) {
    showError(longError);
    return false;
  }
}

//Displaying the input error
function showError(element) {
  element.style.display = "inline-block";
}

//Removing both input errors
function resetErrors(error1, error2) {
  error1.style.display = "none";
  error2.style.display = "none";
}

// Wait for the window to load, then set up the submit event handler for the form.
window.onload = function () {
  const form = document.querySelector("form");
  form.onsubmit = validate;
};
