$(document).ready(() => {

  // handle input changes
  $("#fileInput").change(function() {
      const newFile = this.files[0];

      renderJSON(newFile);
  });


  function renderJSON(file) {

    $('.render').empty();

    // generate a new FileReader object
    var reader = new FileReader();

    if (file.type !== 'application/json') {
      alert('Please input a valid JSON file.');
    } else {
      //fires onload function below once the file is read
      reader.readAsText(file);
    }

    reader.onload = function(event) {

      const loadedJSON = event.target.result;

      // console.log(loadedJSON);

      let jsonObject = JSON.parse(loadedJSON);

      return convertJSON(jsonObject);

    };

  }

  function convertJSON(input) {

    if (typeof input.content === 'string') {

      $('.render').append(`<${input.tag}>${input.content}</${input.tag}`);

    } else {
      if (input instanceof Object) {

        for (var key in input) {

          if (input.hasOwnProperty(key)) {
            convertJSON(input[key]);
          }
        }
      } else {

        $('.render').append(`<${input}>`);

      }
    }

  }

  // Check for the various File API support.
  if (window.File && window.FileReader && window.FileList) {

  } else {
    alert('The File APIs are not fully supported in this browser.');
  }

});
