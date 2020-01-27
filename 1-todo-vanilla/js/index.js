//TODO add event to listen to when DOM is ready to access
document.addEventListener("DOMContentLoaded", (event) => {
  document.addEventListener("submit", (event) => {
    event.preventDefault()
  }); {
    //TODO add event listener to signal that user is submitting form
    {
      // TODO add code to keep form default submit behavior from occurring

      // TODO add a selector that selects the input element with the attribute name equal to "item-input"
      let itemInput = document.querySelector('input[name = "item-input"]');

      let itemValue = itemInput.value;
      //test to be sure that user entered a value
      if (itemValue.length !== 0) {
        //create new item
        //TODO create a list item with a checkbox and a label containing the user input string
        let newItemEl = document.createElement("li");
      let newLabel = document.createElement("label");


      //create checkbox
      let newCheckBox =  document.createElement("input");
      newCheckBox.setAttribute("type", "checkbox")
      newItemEl.appendChild(newCheckBox);

      newItemEl.appendChild(newLabel);
      newLabel.textContent = itemValue;

      //get a reference to list and append list item
      let list = document.querySelector('.todo-list');

      list.appendChild(newItemEl);
      //clear the user input
      itemInput.value = '';

      //add a click event listener that serves a toggle
      //TODO add click event toggle that strikes out text in label associated with list item
      newCheckBox.addEventListener("click", function (event) {
        // TODO check if the textDecoration style on this.nextSibling is "line-through"
        if (this.nextSibling.style.textDecoration == "line-through" ) {
          this.nextSibling.style.textDecoration = "";
          // TODO set the textDecoration style on this.nextSibling to blank (empty string)
        } else {
          this.nextSibling.style.textDecoration = "line-through";
          // TODO set the textDecoration style on this.nextSibling to crossed out ("line-through")
        }
      });

    }
  }) // form submit
}) // document ready