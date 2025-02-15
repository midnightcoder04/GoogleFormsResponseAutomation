function testSubmit() {
  var form = FormApp.openById('<FormId>'); //Replace with your Form ID found on the link URL
  var responsesCount = form.getResponses().length;
  var responses = form.getResponses();
  var response = responses[responsesCount-1];

  var formItems = form.getItems();
  console.log("=== All Form Fields ===");
  formItems.forEach(function(item) {
    console.log("Title:", item.getTitle());
    // console.log("ID:", item.getId());
    // console.log("---");
  });

  var itemResponses = response.getItemResponses();
  console.log(itemResponses);
}