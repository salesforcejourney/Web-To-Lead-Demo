function beforesubmit() {
  let datepicker = document.querySelector(".lead_date");
  let hiddendatepicker = document.querySelector(".lead_date__c");

  let formattedDate = new Date(datepicker.value).toLocaleDateString("en-IN");
  hiddendatepicker.value = formattedDate;
}
