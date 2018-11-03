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
  var trainTime = 0;
  var frequency = 0;



  database.ref().on("value", function(snapshot) {

    // retrieves already stored data
    if (snapshot.child("").exists() && snapshot.child("").exists()) {
      // Set the variables equal to the stored values.
      trainName = snapshot.val().trainName;
      destination = snapshot.val().destination;
      trainTime = snapshot.val().trainTime;
      frequency = snapshot.val().frequency;
    }
  
    // log the values to console and display them on the page.
    console.log(trainName);
    console.log(destination);
    console.log(trainTime);
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
  trainName = $("#train-name").val().trim();
  destination = $("#destination").val().trim();
  trainTime = $("#train-time").val().trim();
  frequency = $("#frequency").val().trim();

  // Save the new train info in Firebase 
    database.ref().set({
      highBidder: bidderName,
      highPrice: bidderPrice
    });

  });
