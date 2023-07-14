// Access the form and register the form submission event
document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('#blogForm');
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the form from submitting

      // Retrieve the form values
      var title = document.querySelector('#title').value;
      var content = document.querySelector('#content').value;

      // Display the filled details on the webpage
      var detailsContainer = document.querySelector('#detailsContainer');
      detailsContainer.innerHTML = `
        <h1>Blog Details</h1>
        <h2>Title: ${title}</h2>
        <p>Content: ${content}</p>
        <div id="imagePreview"></div>
        <div id="videoPreview"></div>
      `;

      // Display image preview
      var imageInput = document.querySelector('#image');
      displayPreview(imageInput, 'imagePreview');

      // Display video preview
      var videoInput = document.querySelector('#video');
      displayPreview(videoInput, 'videoPreview');

      // Clear the form inputs after submission
      form.reset();
    });
  });

  // Function to display file preview
  function displayPreview(input, previewId) {
    var preview = document.querySelector('#' + previewId);
    var file = input.files[0];
    var reader = new FileReader();

    reader.onload = function(e) {
      preview.innerHTML = '';
      if (input.accept.includes('image')) {
        var image = document.createElement('img');
        image.src = e.target.result;
        image.alt = 'Blog Image';
        preview.appendChild(image);
      } else if (input.accept.includes('video')) {
        var video = document.createElement('video');
        video.src = e.target.result;
        video.autoplay = true;
        video.controls = true;
        preview.appendChild(video);
      }
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  }