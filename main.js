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



  // function convertJSON(obj) {
  //
  //   if (typeof obj.content === 'string') {
  //
  //     $('.render').append(`<${obj.tag}>${obj.content}</${obj.tag}>`);
  //
  //   } else if (Array.isArray(obj.content)) {
  //
  //     obj.content.map(subObj => {
  //
  //       if (typeof subObj.content === 'string') {
  //
  //         $('.render').append(`<${subObj.tag}>${subObj.content}</${subObj.tag}>`);
  //
  //       } else {
  //
  //         convertJSON(subObj.content);
  //       }
  //
  //     });
  //
  //   } else {
  //
  //     obj.map(subObj => {
  //
  //       if (typeof subObj.content === 'string') {
  //
  //         $('.render').append(`<${subObj.tag}>${subObj.content}</${subObj.tag}>`);
  //
  //       } else {
  //
  //         $('.render').append(`<${subObj.tag}>`);
  //         convertJSON(subObj.content);
  //       }
  //
  //     });
  //
  //   }
  //
  //
  // }



  // function convertJSON(input) {
  //
  //   if (typeof input.content === 'string') {
  //
  //     $('.render').append(`<${input.tag}>${input.content}</${input.tag}`);
  //
  //   } else {
  //     if (input instanceof Object) {
  //
  //       for (var key in input) {
  //
  //         if (input.hasOwnProperty(key)) {
  //           convertJSON(input[key]);
  //         }
  //       }
  //     } else {
  //
  //       $('.render').append(`<${input}>`);
  //
  //     }
  //   }
  //
  // }

  // Check for the various File API support.
  if (window.File && window.FileReader && window.FileList) {

  } else {
    alert('The File APIs are not fully supported in this browser.');
  }

  //helper functions

  // function checkIfString(object) {
  //
  //   if (typeof object.content === 'string') {
  //
  //     return $('.render').append(`<${object.tag}>${object.content}</${object.tag}>`);
  //
  //   } else {
  //
  //     return convertJSON(object.content);
  //   }
  //
  // }

});
