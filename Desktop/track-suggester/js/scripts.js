$(document).ready(function() {
$("#form#survey").submit(function(event) {
    event.preventionDefault();
    var experience = $("select#experience").val();
    var learning = $("select#learning").val();
    var preference = $("select#preference").val();
    var environment = $("select#environment").val();
    var web-apps = $("select#web-apps").val();

    if (preference === "Back-End" && learning === "yes");
      alert("Check out PHP!!"); }
      $("PHP").show();
    } else if (environment === "Yes" && experience === novice) {
      alert("Give C# a try.");
      $("C#").show();
    } else if (web-apps === "Yes" && experience = none) {
      alert("You will like Ruby!"); }
      $("Ruby").show();
    }
  });
});
