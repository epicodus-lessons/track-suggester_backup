$(document).ready(function() {
  $("#form#survey").submit(function(event) {
    event.preventionDefault();
    var experience = $("select#experience").val();
    var learning = $("select#learning").val();
    var preference = $("select#preference").val();
    var environment = $("select#environment").val();
    var web-apps = $("select#web-apps").val();

    if (preference === "Back-End" && learning === "yes") {
        $("#PHP").show();
        alert("Check out PHP!!");
      }

    } else if (environment === "Yes" && experience === novice) {
      $("#C-sharp").show();
      alert("Give C# a try.");
    }

    } else if (web-apps === "Yes" && experience = none) {
      $("#Ruby").show();
      alert("You will like Ruby!");
    }
  });
});
