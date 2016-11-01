$(document).ready(() => {
  // Check for the various File API support.
  if (window.File && window.FileReader && window.FileList) {
    
  } else {
    alert('The File APIs are not fully supported in this browser.');
  }

  // handle input changes
  $("#fileInput").change(function() {
      const newFile = this.files[0];

      renderJSON(newFile);
  });


  function renderJSON(file) {

    // generate a new FileReader object
    var reader = new FileReader();

    reader.onload = function(event) {

      const loadedJSON = event.target.result;
      console.log(loadedJSON);
    };

    // when the file is read it triggers the onload event above.
    reader.readAsText(file);
  }

});
