$(document).ready(function() {
    var submitButton = $("#getJokeButton");
    console.log(submitButton);
     $("#getJokeButton").click(function(e) {
        e.preventDefault();
         var myurl= "https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_joke";
        $.ajax({
         url : myurl,
         dataType : "json",
         success : function(json) {
              console.log(json);
              document.getElementById("prompt").innerHTML = "Ha ha! Want to hear another?";
              var setup = json.setup;
              var punchline = json.punchline;
              document.getElementById("setup").innerHTML = setup;
              document.getElementById("punchline").innerHTML = punchline;
              document.getElementById("pic").innerHTML = '<img src="laughing.jpg">';
            }
        });
    });
});
