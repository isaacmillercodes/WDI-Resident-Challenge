$(document).ready(() => {

  // Check for the various File API support.
  if (!window.File || !window.FileReader || !window.FileList) {
    alert('The File APIs are not fully supported in this browser.');
  }

  // handle input changes
  $("#fileInput").change(function() {
    const newFile = this.files[0];

    readJSON(newFile);
  });

  //helper functions

  //this function reads the file, parses the JSON as an object, and calls the recursive function

  function readJSON(file) {

    $('.render').empty();

    var reader = new FileReader();

    if (file.type !== 'application/json') {
      alert('Please input a valid JSON file.');
    } else {
      reader.readAsText(file);
    }

    reader.onload = function(event) {

      const loadedJSON = event.target.result;

      let jsonObject = JSON.parse(loadedJSON);

      return renderJSON(jsonObject);

    };

  }

  //this function recursively parses the object and renders elements on the page

  function renderJSON(input) {

    if (typeof input.content === 'string') {

      $('.render').append(`<${input.tag}>${input.content}</${input.tag}`);

    } else {
      if (input instanceof Object) {

        for (var key in input) {

          if (input.hasOwnProperty(key)) {
            renderJSON(input[key]);
          }
        }

      } else {

        $('.render').append(`<${input}>`);

      }
    }

  }

});
