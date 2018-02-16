$(document).ready(function() {
    var submitButton = $("#stackSubmit");
    console.log(submitButton);
     $("#stackSubmit").click(function(e) {
        e.preventDefault();
        var value = $("#stackInput").val();
        console.log(value);
         var myurl= "" + value;
        $.ajax({
         url : myurl,
         dataType : "json",
         success : function(json) {
            console.log(json);
               var images = document.body.getElementsByTagName("img");
                  var image = images[0];
                    var o = JSON.stringify(json);
                    var text = document.createTextNode(o);
                    image.parentNode.replaceChild(text, image);

            }
        });
    });
});
