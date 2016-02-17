//makes sure that the dom is fully loaded before any js runs.
( document ).ready(function() {
// testing the before and after dom ready
    console.log( " after dom ready!" );

// adds item to the list
    $("#add").click(function(){
      var aaa = $("#newToDo").val();
      console.log(aaa);
      $("ul").append("<li>" + aaa + "</li>");
    });

    // pulls item to the list
        $("li").click(function(){
          $(this).remove();
        });
});
// testing the before and after dom ready
    console.log( " before dom ready!" );
