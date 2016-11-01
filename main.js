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

    if (file.type !== 'application/json') {
      alert('Please input a valid JSON file.');
    } else {
      //fires onload function below once the file is read
      reader.readAsText(file);
    }


    reader.onload = function(event) {

      const loadedJSON = event.target.result;

      let convertedJSON = JSON.parse(loadedJSON);

      jsonToHtml(convertedJSON);

    };

  }

  function jsonToHtml(json) {
    $(json).each(function(index, element) {
      console.log(element.tag, 'tag!');
      console.log(element.content);

      jsonToHtml(element.content);

      // if (typeof element.content === Object) {
      //   console.log('got inside conditional');
      //   console.log(element.content, 'content!');
      //   jsonToHtml(element.content);
      //   // jsonToHtml(element.content);
      //
      // }
    });

  }

});
