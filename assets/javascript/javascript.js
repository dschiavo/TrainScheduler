  // Initialize Firebase
    var config = {
    apiKey: "AIzaSyBI-CtpMdJ__8DHrHSCbZFvj62iKiPml58",
    authDomain: "trainscheduler-ad0bf.firebaseapp.com",
    databaseURL: "https://trainscheduler-ad0bf.firebaseio.com",
    projectId: "trainscheduler-ad0bf",
    storageBucket: "trainscheduler-ad0bf.appspot.com",
    messagingSenderId: "1011292243652"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

  var trainName = "";
  var destination = "";
  var frequency = 0;
  var currentTime = moment().



  database.ref().on("value", function(snapshot) {

    // retrieves already stored data
    if (snapshot.child("").exists() && snapshot.child("").exists()) {
      // Set the variables equal to the stored values.
      trainName = snapshot.val().trainName;
      destination = snapshot.val().destination;
      firstTime = snapshot.val().firstTime;
      frequency = snapshot.val().frequency;
    }
    
    minutesAway = nextArrival

    // log the values to console and display them on the page.
    console.log(trainName);
    console.log(destination);
    console.log(firstTime);
    console.log(frequency);
    console.log(nextArrival);
    console.log(minutesAway);

    $("#train-name").text(trainName);
    $("#destination").text(destination);
    $("#frequency").text(frequency);
    $("#next-arrival").text(nextArrival);
    $("#minutes-away").text(minutesAway);

    // If any errors are experienced, log them to console.
  }, function(errorObject) {
    console.log("The read failed: " + errorObject.code);
  });

  // Whenever a user clicks the submit button

$("#submit").on("click", function(event) {
  event.preventDefault();
  // Get the input values
  trainName = $("#train-name-input").val().trim();
  destination = $("#destination-input").val().trim();
  trainTime = $("#train-time-input").val().trim();
  frequency = $("#frequency-input").val().trim();

  // Save the new train info in Firebase 
    database.ref().set({
      trainName: trainName,
      destination: destination,
      trainTime: trainTime,
      frequency: frequency
    });

  });
