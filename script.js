let capthacheck = false;
function beforesubmit(event) {
  if (captchaChecked) {
    let datepicker = document.querySelector(".lead_date");
    let hiddendatepicker = document.querySelector(".lead_date__c");

    let formattedDate = new Date(datepicker.value).toLocaleDateString("en-IN");
    hiddendatepicker.value = formattedDate;
  } else {
    alert("Please check the reCAPTCHA box.");
    event.preventDefault();
  }
}

function timestamp() {
  var response = document.getElementById("g-recaptcha-response");
  if (response == null || response.value.trim() == "") {
    var elems = JSON.parse(
      document.getElementsByName("captcha_settings")[0].value
    );
    elems["ts"] = JSON.stringify(new Date().getTime());
    document.getElementsByName("captcha_settings")[0].value =
      JSON.stringify(elems);
  }
}
setInterval(timestamp, 500);

function captchaSuccess() {
  capthacheck = true;
}
