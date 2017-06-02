$(document).ready(function() {
  $("#form#survey").submit(function() {
    event.preventionDefault();
    var experience = $("select#experience").val();
    var learning = $("select#learning").val();
    var preference = $("select#preference").val();
    var environment = $("select#environment").val();
    var web-apps = $("select#web-apps").val();

    if (preference === "Back-End" && learning === "yes") {
      $("#php").show();
    }

    } else if (environment === "Yes" && experience === novice) {
      $("#c-sharp").show();
    }

    } else if (web-apps === "Yes" && experience = none) {
      $("#ruby").show();
    }
  });
});
