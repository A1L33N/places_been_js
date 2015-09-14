$(document).ready(function(){

  $("#add-landmark").click(function() {
    $("#new-landmarks").append('<div class="new-landmark">' +
                              '<div class="form-group">' +
                              '<label for="landmark-name">' +
                              '<input type="text" class="form-control landmark-name" placeholder="Optional">' +
                              '</div>' +
                              '</div>');
  });

  $("#add-activity").click(function() {
    $("#new-activities").append('<div class="new-activity">' +
                              '<div class="form-group">' +
                              '<label for="activity-name">' +
                              '<input type="text" class="form-control activity-name" placeholder="Optional">' +
                              '</div>' +
                              '</div>');
  });

  $('form#new-place').submit(function(){
    event.preventDefault();
    var inputtedNewCity = $("input#city").val();
    var inputtedNewState = $("input#state").val();
    var inputtedNewCountry = $("input#country").val();

    var newPlace = {city: inputtedNewCity, state: inputtedNewState, country: inputtedNewCountry, landmarks: [], activities: []};

    $('.new-landmark').each(function() {
      var inputtedLandmark = $(this).find('input.landmark-name').val();
      var newLandmark = {landmarkName: inputtedLandmark};
      newPlace.landmarks.push(newLandmark);
    });

    $('.new-activity').each(function() {
      var newActivity = $(this).find('input.activity-name').val();
      // var newActivity = {activityName: inputtedActivity};
      newPlace.activities.push(newActivity);
    });



    $('ul#places').append("<li><span class='place'>" + newPlace.city + " " + newPlace.state + " " + newPlace.country + "</span></li>");

      $(".place").last().click(function() {
        $("#show-places").toggle();
        $("#show-places h2").text(newPlace.city + " " + "," + newPlace.state + " " + newPlace.country);

        $("ul#landmarks").text("");
        newPlace.landmarks.forEach(function(landmark) {
          $("ul#landmarks").append("<li>" + landmark.landmarkName + "</li>");
        });

        $("ul#activities").text("");
        newPlace.activities.forEach(function(activity) {
          $("ul#activities").append("<li>" + activity + "</li>");
        });


      $('input#city')
      $('input#state')
      $('input#country')
      $('input.landmark-name')
      $('input.activity-name')
    });
  });
});
