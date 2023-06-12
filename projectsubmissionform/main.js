$(document).ready(function() {
  $('#projectForm').submit(function(event) {
    event.preventDefault();
    
    // Gather form data
    var title = $('#title').val();
    var description = $('#description').val();
    var teamMembers = $('#teamMembers').val();
    var projectFiles = $('#projectFiles').val();
    var websiteLink = $('#websiteLink').val();
    
    // Perform data validation
    if (!title || !description || !teamMembers || !projectFiles || !websiteLink) {
      alert('Please fill in all fields.');
      return;
    }
    
    // Send data to the server
    $.ajax({
      url: $(this).attr('action'),
      type: $(this).attr('method'),
      data: {
        title: title,
        description: description,
        teamMembers: teamMembers,
        projectFiles: projectFiles,
        websiteLink: websiteLink
      },
      success: function(response) {
        // Handle success response (e.g., display a success message, redirect to a confirmation page)
        alert('Project submitted successfully!');
        window.location.href = 'confirmation.html';
      },
      error: function(xhr, status, error) {
        // Handle error response (e.g., display an error message)
        alert('An error occurred while submitting the project. Please try again later.');
      }
    });
  });
});
