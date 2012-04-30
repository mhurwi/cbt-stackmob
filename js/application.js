//custom application javascript goes here
$(document).ready(function(){
	console.log('custom application.js loaded successfully!')

$('#name-button').click(function(e){
  e.preventDefault();
  var name = $('input#name').val();
  var user = new StackMob.User({ username: name, password:'test'});
  user.create({
    success: function(model){
      console.log('Created successfully!');
    },
    error: function(model, response){
      console.log('error creating the user');
    }
  });
  $('input#name').val('');
});


});