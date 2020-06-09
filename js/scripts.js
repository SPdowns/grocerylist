$(document).ready(function() {
  let groceryInputs = []
  $("#grocery-form").submit(function() {
    event.preventDefault();
    let inputs = $("input#items").val().toUpperCase();
    console.log(inputs)
    groceryInputs.push(inputs)
    groceryInputs.sort();
  });
  
  $("#show-list").click(function() {
    event.preventDefault()
    $("#grocery-list").empty();
    groceryInputs.forEach(function(newGroceryInputs) {
      $("#grocery-list").append("<li>" + newGroceryInputs + "</li>")
      });
      console.log(groceryInputs)
    $("#grocery-list").toggle();
    $("#grocery-list").children("li").click(function() {
      $(this).remove();
    });
  });
});