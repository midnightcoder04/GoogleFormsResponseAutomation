function getForm() {
  return FormApp.openById('<FormId>');  //Replace with your form ID
}

function sendEmailOnFormSubmit(e) {
  var form = getForm();
  var formResponse = e.response;
  var itemResponses = formResponse.getItemResponses();
  var respondentEmail = formResponse.getRespondentEmail();
  
  // Email body, Edit according to your requirement.
  var emailBody = "Thank you for your submission. Here are your responses:\n\n";
  
  for (var i = 0; i < itemResponses.length; i++) {
    var itemResponse = itemResponses[i];
    emailBody += itemResponse.getItem().getTitle() + ": " + itemResponse.getResponse() + "\n";
  }
  if (respondentEmail) {
    MailApp.sendEmail({
      to: respondentEmail,
      subject: form.getTitle() + " - Submission Confirmation",
      body: emailBody
    });
  }
}

function createFormTrigger() {
  var form = getForm();
  ScriptApp.newTrigger('sendEmailOnFormSubmit')
    .forForm(form)
    .onFormSubmit()
    .create();
}
