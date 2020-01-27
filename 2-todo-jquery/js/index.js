//TODO add document ready function
//$(function() ) {   ALSO Works as Recommended method 
$(document).ready(function () {

  $(document).submit(function (event) {
    event.preventDefault();

    //TODO wrap all code related to user submit  


    //TODO add code to keep form default submit behavior from occurring
    // get the value of the input box using jQuery
    //TODO select the DOM object with the name `item-input` and assign its value to a variable called itemValue
    let itemList = $("[name = 'item-input']");
    let itemValue = itemList.val();

    //check that user has input a value before proceeding
    if (itemValue.length !== 0) {
      //create new item
      // TODO append a new item to the todo list that is a <li> element with two children: an <input> with type checkbox and a <label> with the inner text of the value of itemValue

      // shortcut isntead of multiple statments from Vanilla
      $(".todo-list").append("<li> <input type= 'checkbox'> <label> " + itemList + "</label> </li>");
      // sets to 0
      itemList.val('');
      // TODO clear user input in the input box



      //set up toggle on check box click
      // TODO add the code to make this function get added to every :checkbox on the change event
      $(":checkbox").change(function (event) {
        if ($(this).is(':checked')) {
          $(this).siblings("label").css("text-decoration", "line-through")
        } else {
          $(this).siblings("label").css("text-decoration", "none")
        }
      }) // checkbox event function

    }

  }) // form submit
}) // document ready