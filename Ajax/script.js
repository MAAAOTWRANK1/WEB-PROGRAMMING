$(document).ready(function () {
  // Fetch feedbacks on load
  fetchFeedback();

  // Handle form submit
  $("#feedbackForm").on("submit", function (e) {
    e.preventDefault();

    $.ajax({
      url: "submit.php",
      type: "POST",
      data: $(this).serialize(),
      success: function (response) {
        $("#responseMessage").html(`<span style="color:green;">${response}</span>`);
        $("#feedbackForm")[0].reset();
        fetchFeedback(); // Refresh feedback list instantly
      },
      error: function () {
        $("#responseMessage").html(`<span style="color:red;">Something went wrong. Try again!</span>`);
      }
    });
  });

  // Fetch feedback list dynamically
  function fetchFeedback() {
    $.ajax({
      url: "fetch_feedback.php",
      method: "GET",
      success: function (data) {
        $("#feedbackList").html(data);
      },
      error: function () {
        $("#feedbackList").html("<i>Could not load feedbacks.</i>");
      }
    });
  }
});
