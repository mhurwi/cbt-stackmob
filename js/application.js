//custom application javascript goes here
$(document).ready(function(){
	console.log('custom application.js loaded successfully!')


	  //Creating a user, but this time with a callback.
  var user = new StackMob.User({ username: 'Bill Watterson', password: 'weirdosfromanotherplanet', profession: 'cartoonist'  });
  user.create({
    //After StackMob successfully saves "Bill Watterson", print out the result
    success: function(model) {
      //Print out "Bill Watterson: cartoonist"
      console.debug(model.get('username') + ': ' + model.get('profession'));
    },
    error: function(model, response) {
      console.debug("curses! we have failed, Hobbes!");
    }
  });

  
});